import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabSectionComponent } from './tab-section/tab-section.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ManagePageComponent } from './manage-page/manage-page.component'
import { AdDirective }          from './ad.directive';
import { TabsService } from './tabs.service';


@NgModule({
  declarations: [
    AppComponent,
    TabSectionComponent,
    CreatePageComponent,
    HomePageComponent,
    SearchPageComponent,
    ManagePageComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ], 
  providers: [TabsService],
  entryComponents: [ CreatePageComponent, 
    HomePageComponent, SearchPageComponent, ManagePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
