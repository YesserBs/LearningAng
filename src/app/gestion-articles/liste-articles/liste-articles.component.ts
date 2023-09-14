import { Component, OnInit } from '@angular/core';
import { vetments } from '../vetments';
import { vetment } from '../vetment';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
})
export class ListeArticlesComponent implements OnInit {
  vetmentList: vetment[];

  constructor(
    private router: Router,
    private ArticlesService : ArticlesService
  ){}

  ngOnInit(): void {
    this.vetmentList = this.ArticlesService.getList();
  }

  GetToDetails(vet: vetment){
    this.router.navigate(['/articles', vet.id]);
  }
}
