import { Product } from './product';
import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    @Input()
    myProduct:Product;
    constructor() { }

    ngOnInit() { }
}