import { Injectable } from '@angular/core';
import { sample_foods } from '../../data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }
  getAll(): Food[] {
    const food = sample_foods;
    return food;
  }
}
