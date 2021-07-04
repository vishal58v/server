import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallComponentComponent } from './call/call-component/call-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path:'call', component:CallComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
