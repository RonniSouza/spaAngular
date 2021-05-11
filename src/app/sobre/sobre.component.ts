import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  urlImg = '/assets/material.png';
  constructor() { }

  ngOnInit(): void {
  }

}
