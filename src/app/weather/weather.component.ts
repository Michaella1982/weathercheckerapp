import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApixuService } from "../apixu.service";

@Component({

 selector: "app-weather",

 templateUrl: "./weather.component.html",

 styleUrls: ["./weather.component.scss"]

})

export class WeatherComponent implements OnInit {

 public weatherSearchForm: FormGroup;

 public weatherData: any;

 constructor(

 private formBuilder: FormBuilder,

 private apixuService: ApixuService

 ) {}

 ngOnInit() {

 this.weatherSearchForm = this.formBuilder.group({

 location: ["", Validators.required]

 });

 }

 //here is where we subscribe to the weather api data. we are mainly working with the location parameter

 sendToAPIXU(formValues) {

 this.apixuService.getWeather(formValues.location).subscribe(data => {

 this.weatherData = data;

 //check console for full json

 console.log(this.weatherData);

 });

 }

}