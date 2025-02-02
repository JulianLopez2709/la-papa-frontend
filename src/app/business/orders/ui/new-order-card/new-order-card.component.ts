import { Component, Input } from '@angular/core';
import { Food } from '../../../../model/food';

@Component({
  selector: 'app-new-order-card',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div>
        Order #{{food.id}}
      </div>
      <div>
        {{food.description}}
      </div>
    </div>
  `,
  styles: ``
})
export class NewOrderCardComponent {
  constructor() { }
  @Input() food!: Food;
}
