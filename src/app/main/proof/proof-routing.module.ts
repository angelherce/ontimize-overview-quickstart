import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProofDetailComponent } from './proof-detail/proof-detail.component';
import { ProofEditComponent } from './proof-edit/proof-edit.component';
import { ProofHomeComponent } from './proof-home/proof-home.component';


const routes: Routes = [
  { path: '',  component:   ProofHomeComponent },
  { path: 'new', component:   ProofEditComponent },
  { path: ':EMPLOYEEID', component:   ProofDetailComponent },
  { path: ':EMPLOYEEID/edit', component:  ProofEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProofRoutingModule { }
