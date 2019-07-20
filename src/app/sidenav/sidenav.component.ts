import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public articles: any;
  @Input() sidenav;

  constructor() {}

  ngOnInit() {
  }

  closeIfMoblie() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }

}
