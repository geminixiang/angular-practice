export class Message {
  name: String;
  content: String;
  date: Date;
  constructor(name: String, content: String) {
    this.name = name;
    this.content = content;
    this.date = new Date();
  }
}
