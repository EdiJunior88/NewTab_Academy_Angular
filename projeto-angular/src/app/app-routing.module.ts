import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ListComponent } from './components/heroes/list/list.component';
import { VillansComponent } from './components/villans/villans.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: ListComponent,
  },
  {
    path: 'heroes/:id',
    component: HeroesComponent,
  },
  {
    path: 'villans',
    component: VillansComponent,
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
