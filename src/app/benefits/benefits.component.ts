import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  constructor() { }
  benefitTitle:string = 'Reap the benefits of open source';
  // tslint:disable-next-line:max-line-length
  benefitText:string = ', the Adobe PhoneGap framework is an open source distribution of Cordova — providing the advantage of technology created by a diverse team of pros along with a robust developer community — plus access to the PhoneGap toolset, so you can get to mobile faster.';
  ngOnInit() {
  }

}
