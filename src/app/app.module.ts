import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { SigninComponent } from './signin/signin.component';

import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { EnggComponent } from './courses/engg/engg.component';
import { DiplomaComponent } from './courses/diploma/diploma.component';
import { PharmaComponent } from './courses/pharma/pharma.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent,
    
    RegisterComponent,
    GalleryComponent,
    ContactComponent,
    ServicesComponent,
    CoursesComponent,
    EnggComponent,
    DiplomaComponent,
    PharmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
