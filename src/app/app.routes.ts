import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./views/monitor/monitor.component").then(
        (m) => m.MonitorComponent
      ),
  },
];
