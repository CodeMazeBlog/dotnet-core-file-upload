import { UserToCreate } from './_interfaces/userToCreate.model';
import { User } from './_interfaces/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCreate: boolean;
  name: string;
  address: string;
  user: UserToCreate;
  users: User[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.isCreate = true;
  }

  onCreate = () => {
    this.user = {
      name: this.name,
      address: this.address,
      imgPath: ''
    }

    this.http.post('https://localhost:5001/api/users', this.user)
    .subscribe({
      next: _ => {
        this.getUsers();
        this.isCreate = false;
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  private getUsers = () => {
    this.http.get('https://localhost:5001/api/users')
    .subscribe({
      next: (res) => this.users = res as User[],
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  returnToCreate = () => {
    this.isCreate = true;
    this.name = '';
    this.address = '';
  }
}
