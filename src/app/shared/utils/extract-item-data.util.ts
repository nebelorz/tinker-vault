import { ItemTableEntry } from "../../interfaces/item-table.interface";
import { getImagePath } from "./image-path.util";
import { idToTitle } from "./string-format.util";

export function utilGetItemImageSrc(item: ItemTableEntry): string {
    return getImagePath("items", item.id);
}

export function utilGetItemName(item: ItemTableEntry): string {
    return idToTitle(item.id);
}
