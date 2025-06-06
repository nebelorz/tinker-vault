import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { TableColumn } from "../../../interfaces/table-column.interface";
import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
    selector: "app-shared-table",
    standalone: true,
    imports: [CommonModule, SearchBoxComponent],
    templateUrl: "./shared-table.component.html",
    styleUrl: "./shared-table.component.css",
})
export class SharedTableComponent {
    @Input() columns: TableColumn[] = [];
    @Input() data: any[] = [];
    @Input() rowClick?: (row: any) => void;

    searchTerm = "";

    get filteredData() {
        if (!this.searchTerm) return this.data;
        const term = this.searchTerm.toLowerCase();
        return this.data.filter((row) =>
            this.columns.some((col) => {
                const value = row[col.key];
                if (Array.isArray(value)) {
                    return value.join(" ").toLowerCase().includes(term);
                }
                return String(value ?? "")
                    .toLowerCase()
                    .includes(term);
            })
        );
    }

    isArray(value: any): boolean {
        return Array.isArray(value);
    }
}
