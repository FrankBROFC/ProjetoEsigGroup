import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  @Input() tituloCabecalho= '';

  constructor() { }

  ngOnInit(): void {
  }

}
