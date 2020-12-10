import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  
  @HostBinding('attr.banner') cssClass = 'fixed-top';
  constructor() { }

  ngOnInit(): void {
  }

}
