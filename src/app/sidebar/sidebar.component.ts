import {Component, Renderer} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isCollapsed01: boolean = true;
  isCollapsed02: boolean = true;
  isCollapsed03: boolean = true;
  isCollapsed04: boolean = true;


  constructor(private renderer: Renderer) {
  }

  setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }

}
