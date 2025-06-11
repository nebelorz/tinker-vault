import npcs from "../../../assets/data/npcs/npcs.json";

export function getNpcImagePath(id: string, extension = "webp"): string {
    return `assets/images/npcs/${id}.${extension}`;
}

export function utilGetAllNpcs() {
    return npcs.map((npc) => ({
        ...npc,
        image: getNpcImagePath(npc.id),
    }));
}

export function utilGetNpcAssetsById(id: string) {
    const npc = npcs.find((n) => n.id === id);
    if (!npc) return undefined;

    return {
        ...npc,
        image: getNpcImagePath(id),
    };
}
