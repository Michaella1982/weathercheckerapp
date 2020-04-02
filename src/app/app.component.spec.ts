import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({

 providedIn: "root"

})

export class ApixuService {

 constructor(public http: HttpClient) {}

 getWeather(location) {

 return this.http.get(

 "https://api.weatherstack.com/current?access_key=7d943ce723d7ddea226fd1806a40fb60&units=f&query=" +

 location

 );

 }

}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'WeatherChecker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('WeatherChecker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('WeatherChecker app is running!');
  });
});
