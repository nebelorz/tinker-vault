export interface SharedTableColumn {
    key: string;
    label: string;
    type?: "text" | "image" | "array";
    class?: string;
    width?: string;
}
