import { Component } from "@angular/core";

@Component({
  selector: "app-power-booster",
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power" /></div>
    <div>Boost factor: <input [(ngModel)]="factor" /></div>
    <p>Super Hero Power: {{ power | exponentialStrength: factor }}</p>
  `
})
export class PowerBoosterComponent {
  power = 5;
  factor = 1;
}
