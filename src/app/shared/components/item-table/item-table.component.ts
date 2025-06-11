import { Component, Input, model, signal, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ItemTableEntry } from "../../../interfaces/item-table.interface";

import { SearchBoxComponent } from "../search-box/search-box.component";
import { utilGetItemImageSrc, utilGetItemName } from "../../utils/extract-item-data.util";
import { idToTitle } from "../../utils/string-format.util";

@Component({
    selector: "app-item-table",
    standalone: true,
    imports: [CommonModule, RouterLink, SearchBoxComponent],
    templateUrl: "./item-table.component.html",
    styleUrl: "./item-table.component.css",
})
export class ItemTableComponent {
    items = input<ItemTableEntry[]>([]);

    private searchTerm = signal("");

    filteredItems = computed(() => {
        const term = this.searchTerm();
        const currentItems = this.items();

        if (!currentItems || currentItems.length === 0) {
            return [];
        }

        if (!term) {
            return [...currentItems];
        }

        return currentItems.filter((item) => idToTitle(item.id).toLowerCase().includes(term));
    });

    onSearch(term: string) {
        this.searchTerm.set(term.toLowerCase());
    }

    getItemImageSrc(item: ItemTableEntry): string {
        return utilGetItemImageSrc(item);
    }

    getItemName(item: ItemTableEntry): string {
        return utilGetItemName(item);
    }
}
