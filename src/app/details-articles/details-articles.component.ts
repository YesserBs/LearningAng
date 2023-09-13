import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vetment } from '../vetment';
import { vetments } from '../vetments';

@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.component.html',
})
export class DetailsArticlesComponent implements OnInit {
  vetList: vetment[];
  selectedVet: vetment|undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.vetList = vetments
    const vetId: string|null = this.route.snapshot.paramMap.get('id');
    if (vetId){
      this.selectedVet = this.vetList.find(vet => vet.id == +vetId);
    }
  }
}
