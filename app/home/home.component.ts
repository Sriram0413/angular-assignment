import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listOfItems = ['Book', 'Pen', 'Table'];

  addItem() {
    let newItem = prompt('Give any Item');
    this.listOfItems.push(newItem);
  }
}
