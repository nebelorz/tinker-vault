import { Component, ElementRef, ViewChild, input, model, signal, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LucideAngularModule, SearchIcon } from "lucide-angular";

@Component({
    selector: "app-search-box",
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: "./search-box.component.html",
    styleUrl: "./search-box.component.css",
})
export class SearchBoxComponent {
    @ViewChild("searchInput") searchInput!: ElementRef<HTMLInputElement>;

    readonly iconSearch = SearchIcon;

    placeholder = input<string>("Search…");

    searchValue = model<string>("");

    search = output<string>();

    searchTerm = signal<string>("");

    onSearchChange(value: string): void {
        this.searchTerm.set(value);
        this.search.emit(value);
    }

    focus(): void {
        if (this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
    }
}
