import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import type { Npc } from "../../interfaces/npc.interface";
import type { TableColumn } from "../../interfaces/shared-table-column.interface";

import { NpcService } from "./npcs.service";
import { SharedTableComponent } from "../../shared/components/shared-table/shared-table.component";
import { DetailCardComponent } from "../../shared/components/detail-card/detail-card.component";

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

    constructor(private npcDataService: NpcService) {}

    ngOnInit(): void {
        this.npcDataService.getAll().subscribe((data) => {
            this.npcs = data;
        });
    }

    onRowClicked(row: Npc): void {
        this.selectedNpc = row;
    }
}
