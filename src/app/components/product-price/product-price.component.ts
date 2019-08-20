import { Component, OnInit, Input } from '@angular/core';

export interface Option{
  free_delivery: boolean;
  lowest_price: boolean;
  pv: boolean;
}

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent implements OnInit {

  @Input()
  display_options: Option;
  
  constructor() { }

  ngOnInit() {}

}
