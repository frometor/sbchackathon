import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isCollapsed: boolean = true;
  public items:string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  constructor(private renderer: Renderer) { }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
