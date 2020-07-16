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
      {
        path: 'search',
        children: [
          {
            path: ':searchValue',
            loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
          },
        ]
      },
      {
        path: ':houseId',
        loadChildren: () => import('./house-detail/house-detail.module').then(m => m.HouseDetailPageModule)
      }
    ]
  },
  {
    path: 'interest',
    loadChildren: () => import('./interest/interest.module').then(m => m.InterestPageModule)
  },
  {
    path: 'notification',
    children: [
      {
        path: '',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerPageModule)
      },
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
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'google-map',
    children: [
      {
        path: '',
        loadChildren: './google-map/google-map.module#GoogleMapPageModule'
      },
      {
        path: ':houseId',
        loadChildren: './house-detail/house-detail.module#HouseDetailPageModule'
      },
    ]
  },
  {
    path: 'modal-detail',
    loadChildren: () => import('./modal-detail/modal-detail.module').then(m => m.ModalDetailPageModule)
  },
  {
    path: 'post-house-modal',
    loadChildren: () => import('./post-house-modal/post-house-modal.module').then(m => m.PostHouseModalPageModule)
  },
  {
    path: 'posted-house-modal',
    loadChildren: () => import('./posted-house-modal/posted-house-modal.module').then(m => m.PostedHouseModalPageModule)
  },
  {
    path: 'google-house',
    loadChildren: () => import('./google-house/google-house.module').then(m => m.GoogleHousePageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: ':userID',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'google-map',
    children: [
      {
        path: '',
        loadChildren: './google-map/google-map.module#GoogleMapPageModule'
      },
      {
        path: ':houseId',
        loadChildren: './house-detail/house-detail.module#HouseDetailPageModule'
      },
    ]
  },
  {
    path: 'modal-detail',
    loadChildren: () => import('./modal-detail/modal-detail.module').then(m => m.ModalDetailPageModule)
  },
  {
    path: 'post-house-modal',
    loadChildren: () => import('./post-house-modal/post-house-modal.module').then(m => m.PostHouseModalPageModule)
  },
  {
    path: 'posted-house-modal',
    loadChildren: () => import('./posted-house-modal/posted-house-modal.module').then(m => m.PostedHouseModalPageModule)
  },
  {
    path: 'admin',
    children: [{
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
    },
    {
      path: 'param',
      children: [
        {
          path: "",
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
        },
        {
          path: ":houseId",
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
        }
      ]

    },
    {
      path: ':houseId',
      loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
    },
    {
      path: 'google-house',
      loadChildren: () => import('./google-house/google-house.module').then(m => m.GoogleHousePageModule)
    },


    ]

  },
  {
    path: 'approved',
    children: [
      {
        path: '',
        loadChildren: () => import('./approved/approved.module').then(m => m.ApprovedPageModule)
      },
      {
        path: ':houseId',
        loadChildren: () => import('./approved/approved.module').then(m => m.ApprovedPageModule)
      },

    ]

  },
  {
    path: 'approved-detail',
    children: [
      {
        path: '',
        loadChildren: () => import('./approved-detail/approved-detail.module').then(m => m.ApprovedDetailPageModule)
      },
      {
        path: ':houseId',
        loadChildren: () => import('./approved-detail/approved-detail.module').then(m => m.ApprovedDetailPageModule)
      },

    ]

  },
  {
    path: 'refuse-modal',
    loadChildren: () => import('./refuse-modal/refuse-modal.module').then(m => m.RefuseModalPageModule)
  },
  {
    path: 'viewposted-modal',
    loadChildren: () => import('./viewposted-modal/viewposted-modal.module').then(m => m.ViewpostedModalPageModule)
  },
  {
    path: 'viewpostedsuccess-modal',
    loadChildren: () => import('./viewpostedsuccess-modal/viewpostedsuccess-modal.module').then(m => m.ViewpostedsuccessModalPageModule)
  },
  {
    path: 'management',
    children: [
      {
        path: '',
        loadChildren: () => import('./management/management.module').then(m => m.ManagementPageModule)
      },
      {
        path: ':userID',
        loadChildren: () => import('./management/management.module').then(m => m.ManagementPageModule)
      }
    ]

  },
  {
    path: 'warning',
    children: [
      {
        path: '',
        loadChildren: () => import('./warning/warning.module').then(m => m.WarningPageModule)
      },
      {
        path: ':userID',
        loadChildren: () => import('./warning/warning.module').then(m => m.WarningPageModule)
      }
    ]

  },
  {
    path: 'blocked',
    loadChildren: () => import('./blocked/blocked.module').then( m => m.BlockedPageModule)
  },
  {
    path: 'tenant',
    loadChildren: () => import('./tenant/tenant.module').then( m => m.TenantPageModule)
  },
  {
    path: 'host',
    loadChildren: () => import('./host/host.module').then( m => m.HostPageModule)
  },
  {
    path: 'list',
    children: [
     {
        path: '',
      loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
    },
    {
      path: ':type',
      loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
    }
    ]
 
  },
  {
    path: 'tenant-notification-modal',
    loadChildren: () => import('./tenant-notification-modal/tenant-notification-modal.module').then( m => m.TenantNotificationModalPageModule)
  },
  {
    path: 'host-messenger-noti',
    loadChildren: () => import('./host-messenger-noti/host-messenger-noti.module').then( m => m.HostMessengerNotiPageModule)
  },
  {
    path: 'tenant-messenger-noti',
    loadChildren: () => import('./tenant-messenger-noti/tenant-messenger-noti.module').then( m => m.TenantMessengerNotiPageModule)
  },
  {
    path: 'post-warning-modal',
    loadChildren: () => import('./post-warning-modal/post-warning-modal.module').then( m => m.PostWarningModalPageModule)
  },
  {
    path: 'token',
    loadChildren: () => import('./auth/token/token.module').then( m => m.TokenPageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./auth/change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
