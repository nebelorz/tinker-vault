import { Component, Input, signal, model, input } from "@angular/core";
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
    trades = input<NpcTrades>({ isMerchant: false, offer: [] });
}
