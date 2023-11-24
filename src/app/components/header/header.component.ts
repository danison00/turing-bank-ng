import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private loginServ: LoginServiceService, private router: Router){}

  logout(){
    this.loginServ.logout().subscribe();
    this.router.navigate(["/login"]);
  }
}
