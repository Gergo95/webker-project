import { Component } from '@angular/core';
import { Sofa } from 'src/app/shared/constants/constants';

interface Sofa{
  id:Number;
  name:String;
  price:Number;
  photo_url:String;
}
@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.scss']
})
export class SofaComponent {

  sofas: Sofa[] = Sofa;
}
