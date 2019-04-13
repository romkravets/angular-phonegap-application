import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRouters} from './app.routes';
import { DataService } from './data/data.service';
import {AuthService} from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ToolsComponent } from './tools/tools.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    HeaderComponent,
    BenefitsComponent,
    ToolsComponent,
    DocumentationComponent,
    LatestBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters
  ],
  providers: [DataService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
