import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  selectedIndex: number;
  groupList = 
    [
      {
        ruta: '/cursos',
        nombre: 'Inicio'
      },
      {
        ruta: '/fcertificate',
        nombre: 'Certificados'
      },
      {
        ruta: '/login',
        nombre: 'Iniciar sesión'
      }

    ];
  constructor() { }

  ngOnInit(): void {
  }

  select(index){
    this.selectedIndex = index;
  }
}
