import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public heroService: HeroService, public router: Router) {}

  heroes: any = [];

  ngOnInit(): void {
    this.heroes = this.heroService.getList();
  }
}
