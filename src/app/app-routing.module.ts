import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { MessageListComponent } from "./message-list/message-list.component";

// creat the routes for connecting components within the navigation
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "list", component: MessageListComponent },
  // parameterized routes below; see home.component.ts and add to ngOnInit check lesson 7 hands on
  { path: "home2/:id", component: HomeComponent }
];
//remember to **add paths to newly created components, link them and then go to the navigation html and add the new link
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
