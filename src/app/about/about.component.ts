import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isshowmore: boolean = false;
  btnName: any = "show more";

  constructor() { }

  ngOnInit(): void {
  }

  showLessMore() {
    this.isshowmore = !this.isshowmore;
    this.btnName = this.isshowmore ? 'show less' : 'show more';
  }
}
