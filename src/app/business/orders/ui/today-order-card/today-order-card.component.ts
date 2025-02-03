import { Component, Input } from '@angular/core';
import { Food } from '../../../../model/food';

@Component({
  selector: 'app-today-order-card',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div>
      <p>#{{food.id}}
      </p>
        <div class="img"></div>
      </div>
      <div>
        <p style="">
          {{food.title}}
        </p>
      </div>
      <div class="price">
        <p>{{food.price}}</p>
      </div>
    </div>
  `,
  styles: `
    .container{
      display:flex;
    justify-content: space-between;
      padding: 15px;
      background : black;
      border-radius: 20px;
    }

    .img{
      height: 42px;
      width: 42px;
      border-radius: 100%;
      background: gray;
    }

    .price{
      padding: 7px;
      border-radius:10px;
      background: white;
      color: black;
      font-weight: 700;
    }
  `
})
export class TodayOrderCardComponent {
  @Input() food!: Food
}
