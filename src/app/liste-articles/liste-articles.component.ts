import { Component } from '@angular/core';
import { vetments } from '../vetments';
import { vetment } from '../vetment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
})
export class ListeArticlesComponent {
  vetmentList: vetment[] = vetments

  constructor(private router: Router){}

  GetToDetails(vet: vetment){
    this.router.navigate(['/articles', vet.id]);
  }
}
