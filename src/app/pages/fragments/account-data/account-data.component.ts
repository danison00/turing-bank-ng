import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountData } from 'src/app/interfaces/accountData';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit{


  @Input() hidden = true;
  @Output() eventClick: EventEmitter<void> = new EventEmitter<void> ();

  accountData: AccountData = new AccountData();

  constructor(private accServ: AccountService){}

  ngOnInit(){
    this.accServ.getData().subscribe((data)=>{this.accountData = data});
  }
  onEventClick(){

    this.eventClick.emit();
  }
}
