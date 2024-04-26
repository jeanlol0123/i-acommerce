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
    new Message('me', 'Hola ¿cómo estás el día de hoy?'),
    new Message('bot', '¡Estoy muy bien, ¿y tú?')
  ];

  form = new FormGroup({
    prompt: new FormControl('')
  });

  loading: boolean = false;

  constructor() {}

  submit() {

    let prompt = this.form.value.prompt as string;

    // Usuario envía un mensaje
    let userMsg: Message = new Message('me', prompt);
    this.messages.push(userMsg);

    // Mensaje del bot
    let botMsg: Message = new Message('bot', '');
    this.messages.push(botMsg);

    this.form.reset();
    this.form.disable();

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.typeText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec venenatis ipsum. Ut iaculis diam quis magna aliquam, ac molestie enim accumsan. Nam non massa ultricies, pretium arcu eget, cursus massa. Sed vestibulum ultrices tortor quis vulputate. Phasellus rhoncus scelerisque tellus, eu maximus mi scelerisque pellentesque. Morbi tempor nisi sed quam malesuada, id viverra libero vehicula. Nulla consectetur maximus urna ac vestibulum. Donec vehicula tellus ac erat congue, ac facilisis tortor pulvinar. Suspendisse hendrerit viverra metus, sed convallis felis tempus id. Sed id auctor purus. Donec vitae neque malesuada, egestas dolor nec, hendrerit lorem. Morbi neque turpis, sollicitudin laoreet orci.');

      this.form.enable();
    }, 2000);
  }

  typeText(text: string) {
    let messagesLastIndex = this.messages.length - 1;
    let textIndex = 0;
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