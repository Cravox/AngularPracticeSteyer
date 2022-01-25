import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { APP_BASE_HREF } from '@angular/common';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';

@NgModule({
   imports: [
      RouterModule.forRoot(APP_ROUTES, { useHash: true }),
      BrowserModule,
      HttpClientModule,
      FlightBookingModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent,
      BasketComponent,
      FlightTypeaheadComponent
   ],
   providers: [
      {
         provide: APP_BASE_HREF, useValue: '/flight-app'
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
