import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";

import { Npc } from "../../../interfaces/npc.interface";

import { SectionHowToObtainComponent } from "./section-how-to-obtain/section-how-to-obtain.component";
import { SectionCollaborateComponent } from "./section-collaborate/section-collaborate.component";

@Component({
    selector: "app-detail-card",
    standalone: true,
    imports: [NgIf, SectionHowToObtainComponent, SectionCollaborateComponent],
    templateUrl: "./detail-card.component.html",
    styleUrls: ["./detail-card.component.css"],
})
export class DetailCardComponent {
    @Input() data: Npc | null = null;
}
