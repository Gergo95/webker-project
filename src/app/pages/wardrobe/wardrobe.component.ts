import { Component } from '@angular/core';
import { Wardrobe } from 'src/app/shared/constants/constants';

interface Wardrobe{
  id:Number;
  name:String;
  price:Number;
  photo_url:String;
}


@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent {

  wardrobes: Wardrobe[] = Wardrobe;
}
