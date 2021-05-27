import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';

const routes: Routes = [];

@NgModule({
  imports: [ListModule,
  RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'doctor/:id', component: FormComponent},
    { path: 'doctor', component: FormComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]),],
  exports: [RouterModule,ListModule]
})
export class AppRoutingModule {
 }
