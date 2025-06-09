import contributors from "../../../assets/data/contributors/contributors.json";
import type { Contributor } from "../../interfaces/contributor.interface";

export function extractContributorsData(): Contributor[] {
    return contributors;
}

export function sortContributorsByAmount(contributors: Contributor[]): Contributor[] {
    return [...contributors].sort((a, b) => b.amount - a.amount);
}

export function getTopContributors(contributors: Contributor[], top: number = 3): Contributor[] {
    return sortContributorsByAmount(contributors).slice(0, top);
}
