import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { IndustriesComponent } from './industries/industries.component';
import { DigitalComponent } from './digital/digital.component';
import { ContactComponent } from './contact/contact.component';
import { LeadershipComponent } from './leadership/leadership.component';


const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'service' , component : ServiceComponent },
  {path :'industries', component: IndustriesComponent },
  {path : 'digital' , component : DigitalComponent },
  {path : 'contact' , component : ContactComponent },
  {path : 'leadership', component:LeadershipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
