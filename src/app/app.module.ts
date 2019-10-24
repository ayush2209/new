import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { IndustriesComponent } from './industries/industries.component';
import { DigitalComponent } from './digital/digital.component';
import { ContactComponent } from './contact/contact.component';
import { LeadershipComponent } from './leadership/leadership.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiceComponent,
    IndustriesComponent,
    DigitalComponent,
    ContactComponent,
    LeadershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
