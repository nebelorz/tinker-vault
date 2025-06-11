import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpcTrades } from "../../../interfaces/npc.interface";
import { ItemTableComponent } from "../../../shared/components/item-table/item-table.component";

@Component({
    selector: "app-trades-card",
    standalone: true,
    imports: [CommonModule, ItemTableComponent],
    templateUrl: "./trades-card.component.html",
    styleUrl: "./trades-card.component.css",
})
export class TradesCardComponent {
    @Input() trades: NpcTrades = { isMerchant: false, offer: [] };
}
