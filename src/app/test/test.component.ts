import { Component, OnInit } from '@angular/core';

// decorator
@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // template: ` <h2>Welcome Sandeep</h2>`,
  template: `
    <!-- interpolation -->

    /** * can do * /
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>

    <h2>{{ siteUrl }}</h2>

    /** * class binding * /
    <h2 class="text-success">class without binding</h2>
    <h2 [class]="successClass">class with binding</h2>
    <h2 [class.text-danger]="hasError">
      class binding based on expression [true]
    </h2>
    <h2 [class.text-danger]="hasError1">
      class binding based on expression single class [false]
    </h2>
    <h2 [ngClass]="messageClasses">
      class binding tht conditionally apply multiple class
    </h2>

    <!-- style binding -->
    <h2 [style.color]="'orange'">orange hello</h2>
    <div>
      <span [style.font-size.px]="isTrue ? 20 : 12"
        >This style binding is set for true value</span
      >
      <br />
      <span [style.font-size.%]="isTrue ? 120 : 30"
        >This style binding is set for true value</span
      >
      <br />
      <span [style.color]="hasError1 ? 'red' : 'green'"
        >This style binding is set for true value</span
      >
    </div>
    <h2 [style.color]="highlightColor">Style Binding</h2>
    <h2 [ngStyle]="titleStyles">Style binding wth multiple style</h2>
  `,

  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'SANDEEP';
  public siteUrl = window.location.href;
  // class binding
  public successClass = 'text-success';
  public hasError = true;
  public hasError1 = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  isTrue: boolean = true;
  public highlightColor = 'skyblue';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
