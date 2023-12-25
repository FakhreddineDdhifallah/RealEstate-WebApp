import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { DetailsComponent } from './details/details.component';
import { DodajAgencijuComponent } from './dodaj-agenciju/dodaj-agenciju.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { KupacAdminRegisterComponent } from './kupac-admin-register/kupac-admin-register.component';
import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { OglasivacRegisterComponent } from './oglasivac-register/oglasivac-register.component';
import { OglasivacComponent } from './oglasivac/oglasivac.component';

import { RegisterComponent } from './register/register.component';
import { UnosComponent } from './unos/unos.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'kupac',component:KupacComponent},
  {path:'oglasivac',component:OglasivacComponent},
  {path:'admin',component:AdminComponent},
  {path:'unos',component:UnosComponent},
  //{path:'details',component:DetailsComponent},
  {path:'novaagencija',component:DodajAgencijuComponent},
  {path:'advancedsearch',component:AdvancedSearchComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'kupacadminreg',component:KupacAdminRegisterComponent},
  {path:'oglasivacreg',component:OglasivacRegisterComponent},
  {path:'adminreg',component:AdminRegisterComponent},
  {path:'favorites',component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
