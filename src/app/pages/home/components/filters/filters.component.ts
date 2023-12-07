import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html',
})
export class FiltersComponent implements OnInit{

  @Output() showCategory = new EventEmitter<string>();
  //Variables
  categories:any[] = ['shoes','sports'];


  //Methods and constructors
  constructor(){}

  ngOnInit(): void {
    
  }

  onShowCategory(category:string):void{
    this.showCategory.emit(category);
  }
}
