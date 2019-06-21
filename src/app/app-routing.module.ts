import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultsComponent } from './consults/consults.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  //{path: "consults", loadChildren: () => import('./consults/consults.component').then(m => m.ConsultsComponent)}
  {path: "consults", component: ConsultsComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
