import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ShowAppComponent } from './pages/show-app/show-app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'show-app', component: ShowAppComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {

// tslint:disable-next-line:eofline
}