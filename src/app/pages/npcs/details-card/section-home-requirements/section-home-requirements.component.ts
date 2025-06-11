import { Component, input } from "@angular/core";
import { NpcHomeRequirement } from "../../../../interfaces/npc.interface";
import { ItemTableComponent } from "../../../../shared/components/item-table/item-table.component";

@Component({
    selector: "app-section-home-requirements",
    standalone: true,
    imports: [ItemTableComponent],
    templateUrl: "./section-home-requirements.component.html",
})
export class SectionHomeRequirements {
    homeRequirements = input<NpcHomeRequirement[]>([]);
}
