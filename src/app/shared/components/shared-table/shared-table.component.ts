import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

import type { TableColumn } from "../../../interfaces/shared-table-column.interface";

import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
    selector: "app-shared-table",
    standalone: true,
    imports: [CommonModule, SearchBoxComponent],
    templateUrl: "./shared-table.component.html",
    styleUrl: "./shared-table.component.css",
})
export class SharedTableComponent<T = unknown> {
    @Input() columns: TableColumn[] = [];
    @Input() data: T[] = [];
    @Input() selectedRow: T | null = null;
    @Output() rowClicked = new EventEmitter<T>();

    searchTerm = "";

    get filteredData(): T[] {
        if (!this.searchTerm) return this.data;
        const term = this.searchTerm.toLowerCase();
        return this.data.filter((row: T) =>
            this.columns.some((col) => {
                const value = (row as any)[col.key];
                if (Array.isArray(value)) {
                    return value.join(" ").toLowerCase().includes(term);
                }
                return String(value ?? "")
                    .toLowerCase()
                    .includes(term);
            })
        );
    }

    isArray(value: unknown): value is unknown[] {
        return Array.isArray(value);
    }
}
