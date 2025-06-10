import { Component } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { Sensor } from "../../../common/models/SensorModel";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const sensorData: Sensor[] = [
  {
    name: "Temperature Sensor",
    currentValue: 22.5,
    minValue: -10.0,
    maxValue: 50.0,
  },
  {
    name: "Humidity Sensor",
    currentValue: 45.2,
    minValue: 0.0,
    maxValue: 100.0,
  },
  {
    name: "Pressure Sensor",
    currentValue: 1013.25,
    minValue: 950.0,
    maxValue: 1050.0,
  },
];

@Component({
  selector: "app-monitor",
  imports: [MatTableModule],
  templateUrl: "./monitor.component.html",
  styleUrl: "./monitor.component.css",
})
export class MonitorComponent {
  displayedColumns: string[] = ["name", "currentValue", "minValue", "maxValue"];
  dataSource = sensorData;
}
