import { Component, OnInit } from '@angular/core';

export interface Option{
  prod_url: string;
  prod_name: string;
  dc_ratio: number;
  price: number;
  count_review?: number;
  count_like?: number;
  avg_rating?: number;
}

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent implements OnInit {
  display_option: Option
  constructor() { }

  ngOnInit() {
    this.display_option = {
      prod_url: "",
      prod_name: "",
      dc_ratio: .3,
      price: 20000,
    }
  }

}
