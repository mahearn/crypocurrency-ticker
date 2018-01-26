import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: 'prices', component: AppComponent },
  { path: '', component: StartComponent },
  { path: 'prices/:name', component: DetailsComponent }
];

// {
//   path: 'recipes', component: RecipesComponent, children: [
//     { path: '', component: RecipeStartComponent },
//     { path: 'new', component: RecipeEditComponent },
//     { path: ':id', component: RecipeDetailComponent },
//     { path: ':id/edit', component: RecipeEditComponent }
//   ]
// }

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
