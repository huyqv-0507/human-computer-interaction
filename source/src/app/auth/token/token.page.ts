import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
  public token: string = "";
  public tokenErr: string;

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  send() {
    this.tokenErr = "";
    if (this.token.length < 1) {
      this.tokenErr = "Mã xác nhận trống!";
    }
    else {
      if (this.token.toString() !== "123456") {
        this.tokenErr = "Mã xác nhận không đúng!";
      }
    }
    if (this.tokenErr.length < 1) {
      this.router.navigateByUrl('/change');
    }
  }

}
