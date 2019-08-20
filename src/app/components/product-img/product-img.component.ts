import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
})
export class ProductImgComponent implements OnInit {

  @Input()
  product_url: string;

  @Input()
  heart_url: string// = "'http://localhost:8100/assets/samples/vector.png'";

  constructor() { }

  ngOnInit() { }

}
