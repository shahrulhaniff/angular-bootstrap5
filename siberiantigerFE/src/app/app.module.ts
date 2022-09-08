import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BreadcrumbsComponent } from './layout/menu/breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './layout/menu/menu.component';
import { TitleComponent } from './layout/menu/title/title.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BodyComponent } from './layout/body/body.component';
//import { MyprofileComponent } from './pages/myprofile/myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    TitleComponent,
    MenuComponent,
    AuthComponent,
    BodyComponent
    //MyprofileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
