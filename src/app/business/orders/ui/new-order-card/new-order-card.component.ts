import { Component, Input } from '@angular/core';
import { Food } from '../../../../model/food';

@Component({
  selector: 'app-new-order-card',
  standalone: true,
  imports: [],
  template: `
    <div class="container ">
    <div class="" style="display:flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
            <p style="font-weight: 700;">Order #{{food.food_id}}</p>
            <p>01 Ene 2025, 08:23 AM </p>
        </div>
        <div class="avatar-user"></div>
    </div>


    <div class="detail-food">
        <div class="img-food"></div>
        <div style="max-width: 950px;">
          <p style="font-weight: 700;">{{food.name}}</p>
          <p style="margin-bottom:7px;">{{food.description}}</p>
          <div class="" style="display:flex; justify-content: space-between; align-items: center;">
            <p>{{food.price}}</p>
            <p>duracion</p>
        </div>
        </div>
    </div>

    <div style=" display:flex; justify-content: space-between; align-items: center; border-top: 1px solid gray; padding-top:7px;">
            <div>
                <p>X2 Articulos</p>
                <p>{{food.price}}</p>
            </div>

            <div style="display:flex;">
                <div style=" height: 42px;
      width: 42px; border-radius: 10px; border:1px solid red; margin-right:10px"></div>
                <div style="height: 42px;
      width: 42px; border-radius: 10px; border:1px solid green;"></div>
            </div>
    </div>
</div>
  `,
  styles: `
    .container{
      max-width: 100%; 
      background: yellow;
      padding: 15px;
      background : white;
      border-radius: 20px;
      color:black;
    }

    .avatar-user{
      background: gray;
      height: 42px;
      width: 42px;
      border-radius: 100%;
    }

    .detail-food{
      display:flex;
      margin-bottom: 8px;
      
    }

    .img-food{
      margin-right: 7px;
      background: gray;
      height: 80px;
      width: 80px;
      border-radius: 100%;
    }

    @media (max-width: 1200px) {
      .detail-food{
        display: none;
      }
}
  `
})
export class NewOrderCardComponent {
  constructor() { }
  @Input() food!: Food;
}
