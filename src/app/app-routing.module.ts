import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { MainComponent } from './pages/main/main.component';
import { BedComponent } from './pages/bed/bed.component';
import { CofeeTableComponent } from './pages/cofee-table/cofee-table.component';
import { DrawerComponent } from './pages/drawer/drawer.component';
import { SofaComponent } from './pages/sofa/sofa.component';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  {path: 'furniture', component: FurnitureComponent,canActivate:[AuthGuard]},
  {path: 'main', component: MainComponent},
  {path: 'bed', component: BedComponent},
  {path: 'coffee-table', component: CofeeTableComponent},
  {path: 'drawer', component: DrawerComponent},
  {path: 'sofa', component: SofaComponent},
  {path: 'wardrobe', component: WardrobeComponent},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule), },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),canActivate:[AuthGuard] },



];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}