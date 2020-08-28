import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "tour-guide",
        loadChildren: () => import("./pages/tour-guide-view/tour-guide-view.module").then(m => m.TourGuideViewModule),
        data: {
          breadcrumb: "Tour Guide"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
