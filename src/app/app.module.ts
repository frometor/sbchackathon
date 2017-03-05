import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CollapseModule,AccordionModule, DropdownModule, Ng2BootstrapModule} from 'ng2-bootstrap'
import {GraphqlIosAppService} from './graphql-ios-app.service'
import {TrainoverviewService} from './trainoverview.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrainoverviewComponent } from './trainoverview/trainoverview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TrainoverviewComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    Ng2BootstrapModule
  ],
  providers: [
    GraphqlIosAppService,
    TrainoverviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
