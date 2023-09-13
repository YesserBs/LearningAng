import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { RouterModule, Routes } from '@angular/router';

const routesVetments: Routes = [
  { path: 'articles', component: ListeArticlesComponent},
  { path: 'articles/:id', component: DetailsArticlesComponent},
];

@NgModule({
  declarations: [
    ListeArticlesComponent,
    DetailsArticlesComponent,
    MyDirectiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVetments)
  ]
})
export class GestionArticlesModule { }
