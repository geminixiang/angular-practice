import { Component } from "@angular/core";
import { Message } from "./message";

@Component({
  selector: "app-message",
  template: `
    <form (ngSubmit)="addMessage()">
      <p>
        名稱：
        <input type="text" name="name" [(ngModel)]="name" />
      </p>

      <p>
        內容：
        <input type="text" name="content" [(ngModel)]="content" />
      </p>

      <p>
        <button type="submit">新增留言</button>
      </p>
    </form>

    <ng-container *ngFor="let message of messages">
      <p>
        {{ message.name }}：{{ message.content }} |
        {{ message.date | date: "MM/dd
    HH:mm" }}
      </p>
    </ng-container>
  `
})
export class MessageComponent {
  name = "";
  content = "";
  messages: Message[] = [];
  addMessage(): void {
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }
    const message = new Message(this.name, this.content);
    this.messages.push(message);
    this.content = "";
  }
}
