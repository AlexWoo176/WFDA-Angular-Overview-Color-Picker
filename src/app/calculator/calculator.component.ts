import {Component, OnInit} from '@angular/core';

const ADD = '+';

const SUB = '-';

const MUL = '*';

const DIV = '/';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  output: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value): void {
    this.first = Number(value);
  }

  onSecondChange(value): void {
    this.second = Number(value);
  }

  onSelectChange(value): void {
    this.operator = value;
  }

  calculate(): void {
    switch (this.operator) {
      case ADD:
        this.output = this.first + this.second;
        break;
      case SUB:
        this.output = this.first - this.second;
        break;
      case MUL:
        this.output = this.first * this.second;
        break;
      case DIV:
        this.output = this.first / this.second;
        break;
    }
  }
}
