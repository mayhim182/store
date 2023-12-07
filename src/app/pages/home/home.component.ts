import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number} = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit{

    category:string | undefined;
    cols:number = 3;
    rowHeight = ROWS_HEIGHT[this.cols];


    //Methods
    ngOnInit(): void {

    }

    onColumnsCountChange(colsNum:number):void{
      console.log("%c%s "+colsNum,"background-color:yellow;color:black;")
      this.cols = colsNum;
      this.rowHeight = ROWS_HEIGHT[this.cols];
    }

    onShowCategory(newCategory:string):void{
      this.category = newCategory;
    }
}
