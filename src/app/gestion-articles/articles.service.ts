import { Injectable } from '@angular/core';
import { vetment } from './vetment';
import { vetments } from './vetments';

@Injectable()
export class ArticlesService {

  constructor() { }

  getList() : vetment[] {
    return vetments;
  }
}
