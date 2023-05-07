import { Component } from '@angular/core';
import { CoffeeTable } from 'src/app/shared/constants/constants';


interface CoffeeTable{
  id:Number;
  name:String;
  price:Number;
  photo_url:String;
}



@Component({
  selector: 'app-cofee-table',
  templateUrl: './cofee-table.component.html',
  styleUrls: ['./cofee-table.component.scss']
})
export class CofeeTableComponent {
  coffeetables: CoffeeTable[] = CoffeeTable;
}
