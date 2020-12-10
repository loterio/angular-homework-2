import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title:string;
  @Input() link1:string;
  @Input() link2:string;
  
  @Input() ligado:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
