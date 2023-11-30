import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/service/account.service';

interface Fav {
  name: string,
  accountNumber: string
}


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit, OnDestroy {


  favs: Fav[] = [];
  load = true;

  constructor(private accServ: AccountService) {
  }




  subGetData!: Subscription;
  ngOnInit(): void {
    this.subGetData = this.accServ.getData().subscribe((data) => {


      this.favs = [...data.favoritesAccounts];
      this.load = false;

    });
  }
  ngOnDestroy(): void {
    this.subGetData.unsubscribe()
  }


}
