import { Component, OnInit } from "@angular/core";
import { StealthMessage } from "../stealth-message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  // title: string; //this is for the {{title}} to check input from interface of browser form
  // message: string;
  message: StealthMessage = new StealthMessage();

  onSubmit(): void {
    // alert("I work");
    this.messageService.addMessage(this.message);
  }

  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
