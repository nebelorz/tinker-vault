import { Component, Input } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";

import { NpcTrades } from "../../../../interfaces/npc.interface";

import { getImagePath } from "../../../utils/image-path.util";
import { idToTitle } from "../../../utils/string-format.util";

@Component({
    selector: "app-section-trade",
    standalone: true,
    imports: [NgIf, NgFor, RouterLink],
    templateUrl: "./section-trade.component.html",
})
export class SectionTradeComponent {
    @Input() trades!: NpcTrades;

    getItemImageSrc(item: { id: string }): string {
        return getImagePath("items", item.id);
    }

    getItemName(itemId: string): string {
        return idToTitle(itemId);
    }
}
