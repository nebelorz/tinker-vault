import { Component, OnInit, signal, computed } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import type { Npc } from "../../interfaces/npc.interface";
import type { TableColumn } from "../../interfaces/shared-table-column.interface";

import { SharedTableComponent } from "../../shared/components/shared-table/shared-table.component";
import { DetailsCardComponent } from "./details-card/details-card.component";
import { TradesCardComponent } from "./trades-card/trades-card.component";
import { utilGetAllNpcs } from "../../shared/utils/extract-npc-data.util";

@Component({
    selector: "app-npcs",
    standalone: true,
    imports: [SharedTableComponent, DetailsCardComponent, TradesCardComponent],
    templateUrl: "./npcs.component.html",
    styleUrl: "./npcs.component.css",
})
export class NpcsComponent implements OnInit {
    npcs = signal<Npc[]>([]);
    selectedId = signal<string>("");

    selectedNpc = computed(() => {
        const id = this.selectedId();
        return id ? this.npcs().find((npc) => npc.id === id) : undefined;
    });

    npcColumns: TableColumn[] = [
        { key: "image", label: "", type: "image", width: "40px" },
        { key: "name", label: "Name", type: "text", class: "font-bold" },
        { key: "description", label: "Description", type: "text" },
        { key: "biome", label: "Biome", type: "array" },
        { key: "role", label: "Role", type: "array" },
    ];

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.npcs.set(utilGetAllNpcs());

        // Get ID from route parameters
        const id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.selectedId.set(id);
        }
    }

    onRowClicked(row: Npc): void {
        this.selectedId.set(row.id);
        this.router.navigate(["/npcs", row.id]);
    }

    clearSelectedNpc(): void {
        this.selectedId.set("");

        const url = this.router.createUrlTree(["/npcs"]).toString();
        history.replaceState({}, "", url);
    }
}
