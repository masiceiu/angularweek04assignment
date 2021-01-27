import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DistrictComponent } from './pages/district/district.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './shared/component/card/card.component';
import { BoxListComponent } from './shared/component/box-list/box-list.component';
import { CardGroupComponent } from './shared/component/card-group/card-group.component';
// Services
import {UrlService, HttpService} from './common/services';
import {StudentService, TeacherService, DistrictService} from './common/services';
import { TableComponent } from './shared/component/table/table.component';
import { BdLocalPipe } from './shared/pipes/bd-local.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    HomeComponent,
    DistrictComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PageNotFoundComponent,
    CardComponent,
    BoxListComponent,
    CardGroupComponent,
    TableComponent,
    BdLocalPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    UrlService,
    StudentService,
    TeacherService,
    DistrictService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
