import { Component } from '@angular/core';
import { Bed } from 'src/app/shared/constants/constants';

interface Bed{
  id:Number;
  name:String;
  price:Number;
  photo_url:String;
}


@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.scss']
})
export class BedComponent {

  beds: Bed[] = Bed;
}
