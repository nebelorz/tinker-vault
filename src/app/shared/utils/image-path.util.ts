export function getImagePath(category: string, id: string, extension = "webp"): string {
    return `assets/images/${category}/${id}.${extension}`;
}
