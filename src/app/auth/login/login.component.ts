import { UIService } from './../../shared/ui.service';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm:FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;
  
  constructor(private authSrv: AuthService, private UISrv: UIService) { }

  ngOnInit() {
    this.loadingSubs = this.UISrv.loadingStateChanged.subscribe(isLoading => this.isLoading = isLoading);
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
      password: new FormControl('', { validators: [ Validators.required ] }),
    });
  }

  onSubmit(){
    this.authSrv.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }
}