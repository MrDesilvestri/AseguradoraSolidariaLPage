import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { FormularioComponent } from './formulario/formulario.component';
import {NgOptimizedImage} from "@angular/common";
import {NgxToastNotifierModule} from "ngx-toast-notifier";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormularioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxToastNotifierModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
