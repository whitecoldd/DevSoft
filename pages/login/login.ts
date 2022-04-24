
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/member.model';
import { NewUser } from 'src/models/newuser.model';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
    public onSubmit(event: Event){
      event.preventDefault();

      // const username = ((event.target as HTMLFormElement).username as HTMLInputElement).value;
      // const password = ((event.target as HTMLFormElement).password as HTMLInputElement).value;
    }
}
