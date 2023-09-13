import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';

const routes: Routes = [
  { path: 'articles', component: ListeArticlesComponent},
  { path: 'articles/:id', component: DetailsArticlesComponent},
  { path: '', redirectTo: 'articles', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
