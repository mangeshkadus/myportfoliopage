import { Component, HostListener, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  intro: any = "Hey It's Mangesh. I am";
  position: any = " the Creater of this Website";
  dataArray = ["an Angular Developer", "a Frontend Developer", "a Freelancer","a Web Developer"];
  currentIndex: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.changePosition();
  }
  changePosition() {
    const intervalId = setInterval(() => {
      if (this.currentIndex < this.dataArray.length) {
        this.position = this.dataArray[this.currentIndex];
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 2000);
  }
  @ViewChildren('landingContainer') landingContainers!: QueryList<ElementRef>;

  showLandingAnimation: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    this.landingContainers.forEach(container => {
      const elementTop = container.nativeElement.getBoundingClientRect().top + scrollTop;

      if (elementTop < windowHeight * 0.8) {
        container.nativeElement.classList.add('show');
      } else {
        container.nativeElement.classList.remove('show');
      }
    });
  }
}
