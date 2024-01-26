import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  intro: any = "Hey It's Mangesh. I am";
  constructor() { }
  position: any;
  dataArray = ["Angular Developer", "Frontend Developer", "Freelancer","Web Developer"];
  currentIndex: any = 0;
  isshowmore: boolean = false;
  btnName: any = "show more";
  pNumber: number = 8459014746;
  email: any = "mangeshkadus1111@gmail.com";
  showContact:boolean = false;

  ngOnInit(): void {
  }

  showLessMore() {
    this.isshowmore = !this.isshowmore;
    this.btnName = this.isshowmore ? 'show less' : 'show more';
  }


}
