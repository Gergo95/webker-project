import { Component } from '@angular/core';
import { Drawer } from 'src/app/shared/constants/constants';

 interface Drawer{
  id:Number;
  name:String;
  price:Number;
  photo_url:String;
}


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  drawers: Drawer[] = Drawer;
}
