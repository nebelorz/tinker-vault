import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LucideAngularModule, SquareChevronRightIcon } from "lucide-angular";

import npcsData from "../../../assets/data/npcs/npcs.json";

import type { Npc } from "../../interfaces/npc.interface";
import type { SharedTableColumn } from "../../interfaces/shared-table-column.interface";

import { SharedTableComponent } from "../../shared/components/shared-table/shared-table.component";

@Component({
    selector: "app-npcs",
    standalone: true,
    imports: [CommonModule, LucideAngularModule, SharedTableComponent],
    templateUrl: "./npcs.component.html",
    styleUrl: "./npcs.component.css",
})
export class NpcsComponent {
    readonly iconSquareChevronRight = SquareChevronRightIcon;
    npcs: Npc[] = npcsData;
    npcColumns: SharedTableColumn[] = [
        { key: "image", label: "", type: "image", width: "40px" },
        { key: "name", label: "Name", type: "text", class: "font-bold" },
        { key: "description", label: "Description", type: "text" },
        { key: "biome", label: "Biome", type: "array" },
        { key: "role", label: "Role", type: "array" },
    ];

    onRowClick(npc: Npc) {
        // TODO: Implement navigation or modal logic here
        console.log("NPC clicked:", npc);
    }
}
