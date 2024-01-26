import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { AboutComponent } from './about/about.component';
import { InnerSectionComponent } from './inner-section/inner-section.component';
import { FormsModule } from '@angular/forms';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    InnerSectionComponent,
    ContactSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Include CommonModule here
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
