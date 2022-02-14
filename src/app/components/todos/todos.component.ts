import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos?:Todo[];
  inputTodo:string = "";

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.todos = [

    ]
  }

  toggleDone(id:number){
    this.todos?.map((v, i) => {
      if (i === id) v.completed = !v.completed;
        return v;
    }
    )
  }

  deleteTodo(id:number){
    this.todos = this.todos?.filter((v ,i) => i !== id);
  }

  addTodo(){
    this.todos?.push({
      content:this.inputTodo,
      completed: false
    });

    const todo = JSON.stringify(this.todos);
    localStorage.setItem('todos', todo);
    this.inputTodo = "";
  }

}
