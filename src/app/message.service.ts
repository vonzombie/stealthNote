import { Injectable } from "@angular/core";
import { StealthMessage } from "./stealth-message";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  // below is added is part of the http: client Message store protocal; using the instructors API server back-end / app.module.ts/ message-list.components. will create database in week 6
  private url: string = "https://stealth-api-jv.herokuapp.com/message";
  //list of messages
  messages: StealthMessage[] = [];
  //messages to the list
  addMessage(message: StealthMessage): void {
    //push the message on to the array
    // this.messages.push(message);
    //comment out the abovethis.message.push; Add Below for a  message to be sent across the internet and be stored elsewhere
    this.http.post<StealthMessage>(this.url, message).subscribe();
  }

  getMessages(): Observable<StealthMessage[]> {
    //this is connected with message-list.component.ts
    // return this.messages;
    //comment out the abovethis.message.push; Add Below for a  message to be received
    return this.http.get<StealthMessage[]>(this.url);
  }
  //below is to be aded
  constructor(private http: HttpClient) {}
}
