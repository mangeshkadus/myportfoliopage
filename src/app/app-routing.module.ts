import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InnerSectionComponent } from './inner-section/inner-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'experience',
    component: InnerSectionComponent,
  },
  {
    path: 'contact',
    component: ContactSectionComponent,
  },
  {
    path: 'about',
    component:AboutComponent,
  }
  // Add more routes specific to the "about" section if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
