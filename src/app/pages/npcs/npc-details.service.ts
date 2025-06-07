import { Injectable } from "@angular/core";
import type { NpcDetails } from "../../interfaces/npc-details.interface";

@Injectable({ providedIn: "root" })
export class NpcDetailsService {
    async getNpcDetails(id: string): Promise<NpcDetails | null> {
        try {
            const details = await import(`../../../assets/data/npcs/npcs-details/${id}.json`);
            return details as NpcDetails;
        } catch {
            return null;
        }
    }
}
