import npcs from "../../../assets/data/npcs/npcs.json";
import { getImagePath } from "./image-path.util";

export function utilGetAllNpcs() {
    return npcs.map((npc) => ({
        ...npc,
        image: getImagePath("npcs", npc.id),
    }));
}

export function utilGetNpcAssetsById(id: string) {
    const npc = npcs.find((n) => n.id === id);
    if (!npc) return undefined;

    return {
        ...npc,
        image: getImagePath("npcs", id),
    };
}
