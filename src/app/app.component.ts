import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, SidenavComponent, NavbarComponent],
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {}
