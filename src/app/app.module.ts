import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    ListeArticlesComponent,
    DetailsArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
