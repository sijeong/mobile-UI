import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
})
export class ProductImgComponent implements OnInit {

  @Input()
  img_url: string;
  
  constructor() { }

  ngOnInit() {}

}
