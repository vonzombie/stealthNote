import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // manually write; this calls the lay out for forms in our create page
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from ".//app-routing.module";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { MessageListComponent } from "./message-list/message-list.component";
// add below for something interesting; go to message.service.ts you are sending the message across the internet dont forget to add HTTPClientModule in the imports
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CreateComponent,
    MessageListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], //add the forms module and the import above
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
