import { Product } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {

    products:Product[];

    currentProduct:Product;
    
    constructor() { 
        var p1:Product = new Product(1,"Monitor",3000);      
        var p2:Product = new Product(2,"Mouse",300);
        var p3:Product = new Product(3,"Keyboard",800);
        this.products = [p1,p2,p3];
    }

    ngOnInit() { }

    showData(obj){
       this.currentProduct = obj;
    }
}