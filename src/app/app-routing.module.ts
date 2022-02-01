import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "", redirectTo: "/users", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}