import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppinglistForm: NgForm;
  subscribtion: Subscription;
  editMode = false;
  editiedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slServer: ShoppingListService) {}

  ngOnInit(): void {
    this.subscribtion = this.slServer.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editiedItemIndex = index;
        this.editedItem = this.slServer.getIngredient(index);
        this.shoppinglistForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slServer.addIngredient(newIngredient);
  }
}
