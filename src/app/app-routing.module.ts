import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from "./departments/departments.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments-detail/:id', component: DepartmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
