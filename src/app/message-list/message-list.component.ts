import { Component, OnInit } from "@angular/core";
import { StealthMessage } from "../stealth-message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {
  messages: StealthMessage[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    //go to message.service.ts and add the other getMessages():
    // this.messages = this.messageService.getMessages();
    // comment out above; add below to create a connection to message.service.ts and app.module.ts
    this.messageService.getMessages().subscribe(data => (this.messages = data));
  }
}
