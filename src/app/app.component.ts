import { Component } from '@angular/core';
import { TodoList } from "../core/data/todoList";
import { TodoItem } from "../core/data/todoItem";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showComplete: boolean = false;
  private list = new TodoList("Bob", [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ])
  title = 'pro-angular';
  get userName() {
    return this.list.user;
  }
  get itemCount() {
    return this.list.items.filter((item) => !item.complete).length;
  }
  get items(): Readonly<TodoItem[]> {
    return this.list.items.filter((item)=>!item.complete);
  }
  addItem(value:string){
    if(!value){
      return;
    }
    this.list.addItem(value);
  }
}
