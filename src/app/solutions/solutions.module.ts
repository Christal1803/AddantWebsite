import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions/solutions.component';
import { SmartcityplatformComponent } from './smartcityplatform/smartcityplatform.component';
import { CasinomanagementsystemComponent } from './casinomanagementsystem/casinomanagementsystem.component';
import { HospitalitymanagementComponent } from './hospitalitymanagement/hospitalitymanagement.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SolutionsComponent,
    SmartcityplatformComponent,
    CasinomanagementsystemComponent,
    HospitalitymanagementComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    RouterModule
  ]
})
export class SolutionsModule { }
