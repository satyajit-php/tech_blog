import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import(`./blog/blog.module`).then((m) => m.BlogModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
