import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LucideAngularModule, SearchIcon } from "lucide-angular";

@Component({
    selector: "app-search-box",
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: "./search-box.component.html",
    styleUrl: "./search-box.component.css",
})
export class SearchBoxComponent {
    readonly iconSearch = SearchIcon;
    @Output() search = new EventEmitter<string>();

    onInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.search.emit(value);
    }
}
