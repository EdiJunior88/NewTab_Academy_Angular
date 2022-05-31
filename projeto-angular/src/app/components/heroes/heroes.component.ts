import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tag-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(
    public route: Router,
    public activeRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  hero: any = {};

  otherHeroes: any = [];

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'];

    this.otherHeroes = this.heroService.getList();

    if (id != 'cadastrar') {
      for (let hero of this.otherHeroes) {
        if (hero.id == id) {
          this.hero = hero;
        }
      }
    }
  }

  escreveConsoleLog() {
    console.log('Texto Qualquer');
  }

  villanPage() {
    this.route.navigateByUrl('/villans');
  }

  save() {
    localStorage.setItem('hero', JSON.stringify(this.hero));
  }
}
