import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato!: string;
  urlImg = '/assets/luffy.jpg';
  constructor() { }

  ngOnInit(): void {
    this.contato = 'Meus contatos';
  }

}
