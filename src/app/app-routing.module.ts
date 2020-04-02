import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { CreditsComponent } from "./credits/credits.component";


//routes that power the main nav bar

const routes: Routes = [

 { path: "", component: WeatherComponent },

 { path: "credits", component: CreditsComponent }

];

@NgModule({

 imports: [RouterModule.forRoot(routes)],

 exports: [RouterModule]

})

export class AppRoutingModule {}




