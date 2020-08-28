import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";

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
      },
      {
        path: "grid",
        loadChildren: () => import("./pages/grid-view/grid-view.module").then(m => m.GridViewModule),
        data: {
          breadcrumb: "Grid"
        }
      }
    ]
  },
  {path: "**", component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
