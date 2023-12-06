import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  sort:string = 'Desc';

  constructor(){}

  ngOnInit(){

  }

  onSortUpdated(newSort:string):void{
    this.sort = newSort;
  }

}
