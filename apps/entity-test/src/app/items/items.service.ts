import { Injectable } from '@angular/core';
import { Item, ITEMS } from '../mocks/mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
  }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
