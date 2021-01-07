import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './course/members/member-list/member-list.component';
import { MemberDetailComponent } from './course/members/member-detail/member-detail.component';
import { ListsComponent } from './course/lists/lists.component';
import { MessagesComponent } from './course/messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { PttformatComponent } from './car/pttformat/pttformat.component';
import { FindComponent } from './car/find/find.component';
import { CompareComponent } from './car/compare/compare.component';
import { NewsComponent } from './car/news/news.component';
import { ManufacturerListComponent } from './car/db/manufacturer-list/manufacturer-list.component';
import { ModelListComponent } from './car/db/model-list/model-list.component';
import { ModelDetailComponent } from './car/db/model-detail/model-detail.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    PttformatComponent,
    FindComponent,
    CompareComponent,
    NewsComponent,
    ManufacturerListComponent,
    ModelListComponent,
    ModelDetailComponent,
    TestErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
