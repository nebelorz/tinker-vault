import { ItemTableEntry } from "../../interfaces/item-table.interface";

function idToTitle(id: string): string {
    return id
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function getItemImagePath(id: string, extension = "webp"): string {
    return `assets/images/items/${id}.${extension}`;
}

export function utilGetItemImageSrc(item: ItemTableEntry): string {
    return getItemImagePath(item.id);
}

export function utilGetItemName(item: ItemTableEntry): string {
    return idToTitle(item.id);
}
