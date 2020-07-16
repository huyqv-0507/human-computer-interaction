import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'tenant',
    children: [
      {
        path: '',
        loadChildren: './tenant/tenant.module#TenantPageModule'
      },
      // {
      //   path: 'search',
      //   children: [
      //     {
      //       path: ':searchValue',
      //       loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      //     },
      //   ]
      // },
      // {
      //   path: ':houseId',
      //   loadChildren: () => import('./house-detail/house-detail.module').then(m => m.HouseDetailPageModule)
      // }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
