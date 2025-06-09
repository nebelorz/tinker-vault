import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ItemsComponent } from "./pages/items/items.component";
import { NpcsComponent } from "./pages/npcs/npcs.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "items", component: ItemsComponent },
    { path: "npcs", component: NpcsComponent },
    {
        path: "npc/:id",
        loadComponent: () => import("./pages/npcs/npcs.component").then((m) => m.NpcsComponent),
    },
    { path: "**", redirectTo: "" }, // Fallback to home for any unknown routes
];
