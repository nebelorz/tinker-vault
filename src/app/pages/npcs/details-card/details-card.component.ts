import { Component, input, computed } from "@angular/core";

import { Npc, NpcDetails } from "../../../interfaces/npc.interface";

import { SectionHowToObtainComponent } from "./section-how-to-obtain/section-how-to-obtain.component";
import { SectionCollaborateComponent } from "./section-collaborate/section-collaborate.component";
import { SectionUnlocksComponent } from "./section-unlocks/section-unlocks.component";
import { SectionHomeRequirements } from "./section-home-requirements/section-home-requirements.component";

@Component({
    selector: "app-details-card",
    standalone: true,
    imports: [SectionHowToObtainComponent, SectionCollaborateComponent, SectionUnlocksComponent, SectionHomeRequirements],
    templateUrl: "./details-card.component.html",
})
export class DetailsCardComponent {
    data = input.required<Npc>();

    details = computed<NpcDetails>(() => this.data().details);

    howToObtain = computed(() => this.details().howToObtain);
    unlocks = computed(() => this.details().unlocks);
    homeRequirements = computed(() => this.details().homeRequirements);
}
