import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  idCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  nameCtrl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  constructor(
    private fb: FormBuilder, private router: Router
  ) { }
  loginForm = this.fb.group({
    id: this.idCtrl,
    name: this.nameCtrl
  });
  ngOnInit() {
  }
  redirect() {
    alert('welcome to ' + this.loginForm.value.name + ' !');
    this.router.navigate(['/home']);
  }
}
