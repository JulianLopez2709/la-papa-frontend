import { Component, Input } from '@angular/core';
import { Food } from '../../../../model/food';

@Component({
  selector: 'app-today-order-card',
  standalone: true,
  imports: [],
  template: `
    <div>
      #{{food.id}}
    </div>
  `,
  styles: `
    div{
      padding: 7px 15px;
      border : 1px solid green;
      border-radius: 10px;
    }
  `
})
export class TodayOrderCardComponent {
    @Input() food! : Food
}
