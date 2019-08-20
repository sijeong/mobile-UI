import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';

@NgModule({
  declarations: [
    ProductImgComponent,
    ProductInfoComponent,
    ProductPriceComponent,
    ProductFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductImgComponent,
    ProductFooterComponent,
    ProductInfoComponent,
    ProductPriceComponent
  ]
})
export class ComponentsModule { }

