import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {

  @Output() columnsCountChange = new EventEmitter<number>();

  sort:string = 'Desc';
  itemsShowCount:any = 12;

  constructor(){}

  ngOnInit(){

  }

  onSortUpdated(newSort:string):void{
    this.sort = newSort;
  }

  onItemUpdated(updatedItem:any):void{
    this.itemsShowCount = updatedItem;
  }

  onColumnsUpdated(colNum:number):void{
    console.log("%c%s "+colNum,"background-color:pink;color:black;")
    this.columnsCountChange.emit(colNum);
  }

}
