import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  user_selected: any = 'Bruno';
  usuarios: any[] = [
    {
      id: '1',
      nome: 'Bruno',
      idade: 30,
    },
    {
      id: '2',
      nome: 'Anderson',
      idade: 40,
    },
    {
      id: '3',
      nome: 'Karina',
      idade: 18,
    },
    {
      id: '4',
      nome: 'Fernando',
      idade: 25,
    },
  ];

  alterarNome() {
    this.user_selected = 'Fernando';
  }

  constructor() {}

  ngOnInit(): void {}
}
