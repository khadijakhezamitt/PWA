import { Component, OnInit } from '@angular/core';
import { Message } from '@app/models';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot-component.component.html',
  styleUrls: ['./chatbot-component.component.scss']
})
export class ChatbotComponentComponent implements OnInit {
  public message : Message;
  public messages : Message[];
  public visible:boolean=false;


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }
  ngOnInit() {
  }

}
