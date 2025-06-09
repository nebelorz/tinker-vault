import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Npc } from "../../interfaces/npc.interface";

import npcsData from "../../../assets/data/npcs/npcs.json";

@Injectable({
    providedIn: "root",
})
export class NpcService {
    getAll(): Observable<Npc[]> {
        return of(npcsData);
    }
}
