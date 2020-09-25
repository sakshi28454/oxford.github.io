import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { DiplomaComponent } from './courses/diploma/diploma.component';
import { EnggComponent } from './courses/engg/engg.component';
import { PharmaComponent } from './courses/pharma/pharma.component';


const routes: Routes = [
  {path:'',component:IndexComponent,
children:[
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'sign',component:SigninComponent},
  { path:'reg',component:RegisterComponent},
  { path:'gallery',component:GalleryComponent},
  { path:'services',component:ServicesComponent},
  { path:'contact',component:ContactComponent},
  { path:'courses',component:CoursesComponent},

  { path:'poly',component:DiplomaComponent},
  { path:'engg',component:EnggComponent},
  { path:'pharm',component:PharmaComponent}
]}
] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
