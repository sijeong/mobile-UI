import { Component, OnInit } from '@angular/core';

export interface Option {
  is_top: boolean;
  count_review: number;
  avg_rating: number;
}
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  display_option: Option;

  constructor() { }

  ngOnInit() { 
    this.display_option={
      is_top: true,
      count_review: 10,
      avg_rating: 4.5
    }
  }

}
