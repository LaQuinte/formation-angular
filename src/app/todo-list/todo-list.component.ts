import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { TouchSequence } from 'selenium-webdriver';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  headers = ["nom de la tâche", "assigné à", "1/2"];

  todoList: Array<Todo> = new Array();

  newTask: string= "";

  selectedTask: Todo;

  constructor() {
    this.todoList.push({id: 0, title: "task 0", completed:false, userId:null});
    this.todoList.push({id: 1, title: "task 1", completed:false, userId:null});
  }

  ngOnInit() {
  }

  taskLeft() {
    return this.todoList.filter(todo => todo.completed).length;
  }

  addTask() {
    let newId = this.todoList.length;
    this.todoList.push({id: newId, title: this.newTask, completed:false, userId:null});
    this.newTask = "";
  }

  select(selectedTask: Todo) {
    this.selectedTask = selectedTask;
  }

}
