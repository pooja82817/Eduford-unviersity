import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = this.scrollFunction
  }

  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 125) {

      document.getElementById("header").classList.add('header2')
    } else {
      document.getElementById("header").classList.remove('header2');
    }
  }

  showMenu = false
  toggleMenu(){
    this.showMenu = !this.showMenu
  }

}
