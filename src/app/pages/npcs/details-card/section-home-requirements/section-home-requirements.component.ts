import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NpcHomeRequirement } from "../../../../interfaces/npc.interface";

import { getImagePath } from "../../../../shared/utils/image-path.util";
import { idToTitle } from "../../../../shared/utils/string-format.util";

@Component({
    selector: "app-section-home-requirements",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "./section-home-requirements.component.html",
})
export class SectionHomeRequirements {
    @Input() homeRequirements: NpcHomeRequirement[] = [];

    getItemImageSrc(item: { id: string }): string {
        return getImagePath("items", item.id);
    }

    getItemName(itemId: string): string {
        return idToTitle(itemId);
    }
}
