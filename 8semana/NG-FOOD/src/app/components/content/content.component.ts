import { Component, OnInit } from '@angular/core';
import { LISTA_MENUS_MOCK } from 'src/app/constants/menus-mocks';
import { IMenu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  listaMenu: IMenu[] = LISTA_MENUS_MOCK;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  salvar() {
    // logica
  }
  redirecionar(path: string) {
    this.route.navigateByUrl(path);
  }
  

}
