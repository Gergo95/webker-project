import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signUpForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })

  });

  constructor(private location: Location, private authService: AuthService, private userService : UserService,private router: Router){}

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: this.signUpForm.get('email')?.value?.split('@')[0],
        firstname: this.signUpForm.get('firstname')?.value,
        lastname: this.signUpForm.get('lasttname')?.value,

      };
      this.userService.create(user).then(_ => {
        console.log('USer added sucesfilly');
      }).catch(error =>{
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
    this.router.navigateByUrl('/login');

  }

  goBack(){
    this.location.back();
  }
}
