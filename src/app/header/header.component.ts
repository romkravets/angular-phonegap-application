import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(el) { const windowScroll = window.pageYOffset;
    // tslint:disable-next-line:align
    if (windowScroll >= this.elementPosition) {
        this.sticky = true;
    }
    // tslint:disable-next-line:one-line
    else {
      this.sticky = false;
      }
    }

}