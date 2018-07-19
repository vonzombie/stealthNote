import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // add the private route for parameterized routes
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // add this for parameterized route from app-routing module.ts. check lesson 7 hands on
    const id = this.route.snapshot.paramMap.get("id");
    // alert(id);
  }
}
