import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoListComponent } from "./todo-list.component";

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: []
})
export class TodoListModule {
  addTodo(inputRef: HTMLInputElement): void {
    console.log(inputRef.value);
    inputRef.value = "";
  }
}
