import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  // templateUrl: './structural-directives.component.html',
  template: `
    <!-- if block  -->
    <h2 *ngIf="true">Holla</h2>
    <h2 *ngIf="false">Holla</h2>
    <h2 *ngIf="displayName">Holla</h2>
    <!-- if else block -->
    <h2 *ngIf="displayName; else elseBlock">hey good evening</h2>
    <ng-template #elseBlock>
      <h2>Name is Hidden</h2>
    </ng-template>

    <!-- if else block in single line -->
    <div *ngIf="displayName; then thenBlock; else elseblock"></div>
    <ng-template #thenBlock>
      <h2>Good Evening</h2>
    </ng-template>
    <ng-template #elseblock>
      <h2>GoodNight</h2>
    </ng-template>

    <!-- switch = ngSwitch -->
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color]="'red'">You picked red</div>
      <div *ngSwitchCase="'blue'" [style.color]="'blue'">You picked blue</div>
      <div *ngSwitchCase="'green'" [style.color]="'green'">
        You picked green
      </div>
      <div *ngSwitchDefault>pick again</div>
    </div>

    <!-- ngFor -->
    <div *ngFor="let color1 of colors; index as i">
      <h2>{{ i }} {{ color1 }}</h2>
    </div>
    <h1>---------------------------------------</h1>
    <div *ngFor="let color1 of colors; first as f">
      <h2>{{ f }} {{ color1 }}</h2>
    </div>
    <h1>---------------------------------------</h1>

    <div *ngFor="let color1 of colors; last as l">
      <h2>{{ l }} {{ color1 }}</h2>
    </div>
  `,

  // styleUrls: ['./structural-directives.component.css']
  styles: [``],
})
export class StructuralDirectivesComponent implements OnInit {
  constructor() {}
  public displayName = false;
  public color = 'green';
  public colors = ['red', 'green', 'blue'];
  ngOnInit(): void {}
}
