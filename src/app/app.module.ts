import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BedComponent } from './pages/bed/bed.component';
import { DrawerComponent } from './pages/drawer/drawer.component';
import { SofaComponent } from './pages/sofa/sofa.component';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { CofeeTableComponent } from './pages/cofee-table/cofee-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FurnitureComponent,
    MenuComponent,
    FooterComponent,
    BedComponent,
    DrawerComponent,
    SofaComponent,
    WardrobeComponent,
    CofeeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
