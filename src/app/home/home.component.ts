import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'spa-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {


  frase = 'Olá bem vindoª, essa pagina foi criada atrávez do conteudo do bootcamp da Digital innovation One.';


  constructor() {
  }

  ngOnInit(): void {
  }
}



