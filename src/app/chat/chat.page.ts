import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage {

  messages: Message[] = [
    {sender: 'me', content: 'Hola como estas el dia de hoy?'},
    {sender: 'bot', content: 'Estoy muy bien, y tu?'},
  ];

  form = new FormGroup({
    prompt: new FormControl('')
  })

  loading: boolean = false;

  constructor() {}


  submit() {
    console.log(this.form.value);

    let prompt = this.form.value.prompt as string;

    // Mensaje de usuario
    let userMsg: Message = {sender: 'me', content: prompt}
    this.messages.push(userMsg);

    // Mensaje de bot
    let botMsg: Message = {sender: 'bot', content: ''}
    this.messages.push(botMsg);
  
    this.form.reset();
    this.form.disable();

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.typeText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

      this.form.enable();
    }, 2000);
  }

  typeText(text: string) {
    let textIndex = 0;
    let messagesLastIndex = this.messages.length - 1;
    let interval = setInterval(() => {

      if (textIndex < text.length) {
        this.messages[messagesLastIndex].content += text.charAt(textIndex);
        textIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); 
  }
}
