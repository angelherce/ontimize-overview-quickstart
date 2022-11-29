import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ProofRoutingModule } from './proof-routing.module';
import { ProofHomeComponent } from './proof-home/proof-home.component';
import { ProofDetailComponent } from './proof-detail/proof-detail.component';
import { ProofEditComponent } from './proof-edit/proof-edit.component';


@NgModule({
  declarations: [ProofHomeComponent, ProofDetailComponent, ProofEditComponent],
  imports: [
    SharedModule,
    OntimizeWebModule,
    ProofRoutingModule
  ]
})
export class ProofModule { }
