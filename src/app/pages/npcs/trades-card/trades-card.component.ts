import { Component, Input, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

import { NpcTradeOffer, NpcTrades } from "../../../interfaces/npc.interface";

import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { getImagePath } from "../../../shared/utils/image-path.util";
import { idToTitle } from "../../../shared/utils/string-format.util";

@Component({
    selector: "app-trades-card",
    standalone: true,
    imports: [CommonModule, RouterLink, SearchBoxComponent],
    templateUrl: "./trades-card.component.html",
    styleUrl: "./trades-card.component.css",
})
export class TradesCardComponent {
    @Input() trades: NpcTrades = { isMerchant: false, offer: [] };

    private searchTerm = signal("");

    filteredOffers = signal<NpcTradeOffer[]>([]);

    ngOnChanges() {
        this.updateFilteredOffers();
    }

    onSearch(term: string) {
        this.searchTerm.set(term.toLowerCase());
        this.updateFilteredOffers();
    }

    private updateFilteredOffers() {
        const term = this.searchTerm();
        if (!this.trades || !this.trades.offer) {
            this.filteredOffers.set([]);
            return;
        }

        if (!term) {
            this.filteredOffers.set([...this.trades.offer]);
            return;
        }

        const filtered = this.trades.offer.filter((item) => idToTitle(item.id).toLowerCase().includes(term));

        this.filteredOffers.set(filtered);
    }

    getItemImageSrc(item: NpcTradeOffer): string {
        return getImagePath("items", item.id);
    }

    getItemName(item: NpcTradeOffer): string {
        return idToTitle(item.id);
    }
}
