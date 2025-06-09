import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

import type { Npc } from "../../interfaces/npc.interface";
import type { TableColumn } from "../../interfaces/shared-table-column.interface";

import { SharedTableComponent } from "../../shared/components/shared-table/shared-table.component";
import { DetailCardComponent } from "../../shared/components/detail-card/detail-card.component";
import { getAllNpcs } from "../../shared/utils/extract-npc-data.util";

@Component({
    selector: "app-npcs",
    standalone: true,
    imports: [CommonModule, SharedTableComponent, DetailCardComponent],
    templateUrl: "./npcs.component.html",
    styleUrl: "./npcs.component.css",
})
export class NpcsComponent implements OnInit {
    npcs: Npc[] = [];
    selectedNpc: Npc | null = null;

    npcColumns: TableColumn[] = [
        { key: "image", label: "", type: "image", width: "40px" },
        { key: "name", label: "Name", type: "text", class: "font-bold" },
        { key: "description", label: "Description", type: "text" },
        { key: "biome", label: "Biome", type: "array" },
        { key: "role", label: "Role", type: "array" },
    ];

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.npcs = getAllNpcs();

        const npcId = this.route.snapshot.paramMap.get("id");
        if (npcId) {
            this.selectedNpc = this.npcs.find((npc) => npc.id === npcId) ?? null;
        }
    }

    onRowClicked(row: Npc): void {
        this.selectedNpc = row;
        this.router.navigate(["/npcs", row.id]);
    }
}
