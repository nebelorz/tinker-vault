import { Component, ViewChild, input, output, signal, computed, effect } from "@angular/core";
import { CommonModule } from "@angular/common";

import type { TableColumn } from "../../../interfaces/shared-table-column.interface";

import { SearchBoxComponent } from "../search-box/search-box.component";

import { getNpcImagePath } from "../../utils/extract-npc-data.util";
import { getItemImagePath } from "../../utils/extract-item-data.util";

@Component({
    selector: "app-shared-table",
    standalone: true,
    imports: [CommonModule, SearchBoxComponent],
    templateUrl: "./shared-table.component.html",
    styleUrl: "./shared-table.component.css",
})
export class SharedTableComponent<T = any> {
    @ViewChild(SearchBoxComponent) searchBox!: SearchBoxComponent;

    columns = input<TableColumn[]>([]);
    data = input<T[]>([]);
    selectedId = input<string>("");

    rowClicked = output<T>();
    searchPerformed = output<void>();

    searchTerm = signal<string>("");
    isSearching = signal<boolean>(false);

    filteredData = computed(() => {
        const term = this.searchTerm();
        if (!term) return this.data();

        return this.data().filter((row: T) =>
            this.columns().some((col) => {
                const value = (row as any)[col.key];
                if (Array.isArray(value)) {
                    return value.join(" ").toLowerCase().includes(term.toLowerCase());
                }
                return String(value ?? "")
                    .toLowerCase()
                    .includes(term.toLowerCase());
            })
        );
    });

    constructor() {
        effect(() => {
            if (this.isSearching()) {
                this.searchPerformed.emit();
                this.isSearching.set(false);

                setTimeout(() => {
                    if (this.searchBox) {
                        this.searchBox.focus();
                    }
                }, 0);
            }
        });
    }

    updateSearchTerm(term: string): void {
        this.searchTerm.set(term);

        if (term) {
            this.isSearching.set(true);
        }
    }

    isArray(value: unknown): value is unknown[] {
        return Array.isArray(value);
    }

    getImageSrc(row: T, colKey: string): string {
        const category = (row as any).category;
        const id = (row as any).id;
        if (!id) return "";

        if (category === "npcs") {
            return getNpcImagePath(id);
        } else if (category === "items") {
            return getItemImagePath(id);
        }

        return `assets/images/${category || "default"}/${id}.webp`;
    }

    isRowSelected(row: T): boolean {
        return (row as any).id === this.selectedId();
    }
}
