import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() sidenav;

  public theme: any;
  public currentTheme: any;

  changeTheme() {
    const body = document.querySelector('body');
    this.currentTheme = body.classList;
    this.theme = this.currentTheme[0];

    this.theme === 'kurtz-theme' ? this.theme = 'kurtz-dark-theme' : this.theme = 'kurtz-theme';
    body.classList.remove(this.currentTheme);
    body.classList.add(this.theme);
    localStorage.setItem('currentTheme', this.theme);
  }
}
