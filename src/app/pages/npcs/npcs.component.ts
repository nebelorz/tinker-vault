import { Component, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import npcsData from "../../../assets/data/npcs/npcs.json";

import type { Npc } from "../../interfaces/npc.interface";
import type { NpcDetails } from "../../interfaces/npc-details.interface";
import type { TableColumn } from "../../interfaces/shared-table-column.interface";

import { SharedTableComponent } from "../../shared/components/shared-table/shared-table.component";
import { DetailCardComponent } from "../../shared/components/detail-card/detail-card.component";
import { NpcDetailsService } from "./npc-details.service";

@Component({
    selector: "app-npcs",
    standalone: true,
    imports: [CommonModule, SharedTableComponent, DetailCardComponent],
    templateUrl: "./npcs.component.html",
    styleUrl: "./npcs.component.css",
})
export class NpcsComponent {
    npcs: Npc[] = npcsData;
    npcColumns: TableColumn[] = [
        { key: "image", label: "", type: "image", width: "40px" },
        { key: "name", label: "Name", type: "text", class: "font-bold" },
        { key: "description", label: "Description", type: "text" },
        { key: "biome", label: "Biome", type: "array" },
        { key: "role", label: "Role", type: "array" },
    ];
    selectedNpc: Npc | null = null;
    selectedNpcDetails?: NpcDetails | null = null;

    constructor(private npcDetailsService: NpcDetailsService) {}

    async onRowClick(npc: Npc) {
        this.selectedNpc = npc;
        this.selectedNpcDetails = await this.npcDetailsService.getNpcDetails(npc.id);
    }
}
