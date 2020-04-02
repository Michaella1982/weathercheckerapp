import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { WeatherComponent } from "./weather/weather.component";

import { CreditsComponent } from "./credits/credits.component";

@NgModule({

 declarations: [AppComponent, WeatherComponent, CreditsComponent],

 imports: [

 BrowserModule,

 AppRoutingModule,

 ReactiveFormsModule,

 HttpClientModule

 ],

 providers: [],

 bootstrap: [AppComponent]

})

export class AppModule {}