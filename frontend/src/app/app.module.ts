import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { KupacComponent } from './kupac/kupac.component';
import { OglasivacComponent } from './oglasivac/oglasivac.component';
import { AdminComponent } from './admin/admin.component'
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { DetailsComponent } from './details/details.component';
import { UnosComponent } from './unos/unos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';

import { DodajAgencijuComponent } from './dodaj-agenciju/dodaj-agenciju.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatToolbarModule} from '@angular/material/toolbar';
import { KupacAdminRegisterComponent } from './kupac-admin-register/kupac-admin-register.component';
import { OglasivacRegisterComponent } from './oglasivac-register/oglasivac-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    KupacComponent,
    OglasivacComponent,
    AdminComponent,
    DetailsComponent,
    UnosComponent,
   
    DodajAgencijuComponent,
    AdvancedSearchComponent,
    KupacAdminRegisterComponent,
    OglasivacRegisterComponent,
    AdminRegisterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    
    
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
