import { ContactComponent } from './app/contact/contact.component';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
