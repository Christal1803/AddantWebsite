import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinomanagementsystemComponent } from './casinomanagementsystem/casinomanagementsystem.component';
import { HospitalitymanagementComponent } from './hospitalitymanagement/hospitalitymanagement.component';
import { SmartcityplatformComponent } from './smartcityplatform/smartcityplatform.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  { path: '', component: SolutionsComponent },
  { path: 'smartcityplatform', component: SmartcityplatformComponent },
  { path: 'casinomanagementsystem', component: CasinomanagementsystemComponent },
  { path: 'hospitalitymanagement', component: HospitalitymanagementComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
