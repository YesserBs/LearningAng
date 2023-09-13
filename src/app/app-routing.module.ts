import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionArticlesModule } from './gestion-articles/gestion-articles.module';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full'}
];

@NgModule({
  imports: [
    GestionArticlesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
