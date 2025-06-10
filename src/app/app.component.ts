import { Component, OnInit } from "@angular/core";

import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.greet();
  }
  greet(): void {
    console.log("ashche");

    invoke<string>("show_message").then((text) => {
      console.log(text);
    });
  }
}
