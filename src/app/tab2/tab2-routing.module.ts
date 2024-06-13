import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamViewComponent } from './cam-view/cam-view.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'camView',
        component: CamViewComponent
      }
      ,
      {
        path: '**',
        redirectTo: 'camView',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
