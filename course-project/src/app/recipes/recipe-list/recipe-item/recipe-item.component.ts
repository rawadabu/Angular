import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // TO GET ANY DATA FROM OUTSIDE, WE NEED A DECORATOR INPUT (ALLOW US TO BIND THIS COMPONENT PROPERRTY FROM OUTSIDE)

  ngOnInit(): void {}
}
