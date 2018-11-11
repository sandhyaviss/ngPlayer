import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { PlaylistComponent } from '../app/playlist/playlist.component';
 
const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  { path:'videos', component:PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,PlaylistComponent];