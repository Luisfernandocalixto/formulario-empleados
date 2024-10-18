import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'App Crud';

  employees = [
    { 'name': 'John', position: 'manager', email: 'befopekifu@mailinator.com' },
    { 'name': ' Doe', position: 'Designer', email: 'befopekifu@mailinator.com' },
    { 'name': 'Davis', position: 'Programmer', email: 'befopekifu@mailinator.com' },
    { 'name': 'Jarvis', position: 'Developer', email: 'befopekifu@mailinator.com' },
  ]

  model: any = {};
  model2: any = {};
  myValue = '';
  msg: string = ''
  hideUpdate: boolean = true

  addEmployee(): void {
    this.employees.push(this.model)
    this.msg = 'Campo agregado!'
    setInterval(() => {
      this.msg = ''
    }, 3000);
    this.model = {}
  }
  deleteEmployee(i: any): void {
    let answer = confirm('¿Estas seguro de eliminarlo?')
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Campo elimnado!'
      setInterval(() => {
        this.msg = ''
      }, 3000);

    }
  }
  editEmployee(i: any): void {
    this.hideUpdate = false
    this.model2.name = this.employees[i].name
    this.model2.position = this.employees[i].position
    this.model2.email = this.employees[i].email
    this.myValue = i
  }

  updateEmployee(): void {
    let i = Number(this.myValue);
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Campo actualizado!'
        setInterval(() => {
          this.msg = ''
        }, 3000);
        this.model2 = {}
      }

    }
  }


  closeAlert(): void {
    this.msg = ''
  }


}

