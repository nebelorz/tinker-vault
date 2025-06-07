import { Injectable } from "@angular/core";
import type { Contributor } from "../../../interfaces/contributor.interface";

@Injectable({ providedIn: "root" })
export class TopContributorsService {
    async getContributors(): Promise<Contributor[]> {
        const data = await import("../../../../assets/data/contributors/contributors.json");
        return data.default as Contributor[];
    }
}
