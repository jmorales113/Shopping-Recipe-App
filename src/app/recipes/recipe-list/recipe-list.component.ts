import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Receipe", "This is simply a test", "https://232952-712248-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/Ikea-Veggie-Balls-FEAT.jpg"),
    new Recipe("A Test Receipe", "This is simply a test", "https://232952-712248-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/Ikea-Veggie-Balls-FEAT.jpg")

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
