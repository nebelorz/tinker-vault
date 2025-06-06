export interface TableColumn {
    key: string;
    label: string;
    type?: "text" | "image" | "array";
    class?: string;
    width?: string;
}

export {};
