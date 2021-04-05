import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteEnum } from './Enums/RouteEnum';


const routes: Routes = [
  { path: RouteEnum.Home, component: HomeComponent },
  { path: '', redirectTo: RouteEnum.Home, pathMatch: 'full' },
  { path: '**', redirectTo: RouteEnum.Home, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
