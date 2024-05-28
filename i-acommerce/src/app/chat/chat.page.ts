import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from '../models/message.model';
import axios from 'axios';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage {

  messages: Message[] = [
    {sender: 'bot', content: 'Hola soy Ceres, tu asistente virtual de IAcommerce. ¿En que te puedo ayudar?'},
  ];

  form = new FormGroup({
    prompt: new FormControl('')
  });

  loading: boolean = false;

  constructor() {}

  async submit() {
    console.log(this.form.value);

    let prompt = this.form.value.prompt as string;

    // Mensaje de usuario
    let userMsg: Message = {sender: 'me', content: prompt};
    this.messages.push(userMsg);

    // Mensaje de bot
    let botMsg: Message = {sender: 'bot', content: ''};
    this.messages.push(botMsg);
  
    this.form.reset();
    this.form.disable();

    this.loading = true;

    try {
      const response = await this.chatWithAssistant(prompt);
      this.typeText(response);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
      this.form.enable();
    }
  }

  async chatWithAssistant(userInput: string): Promise<string> {
    const response = await axios.post('https://fine-concrete-mosquito.ngrok-free.app/v1/chat/completions', {
      model: 'lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF',
      messages: [
        { role: 'system', content: 'Eres un asistente virtual para una aplicación de facturación llamada Ceres. como asistente debes ser capaz de realizar las siguientes funciones. Proporcionar asistencia y responder preguntas relacionadas con el proceso de facturación. Debes de ser amigable, eficiente y capaz de comprender y procesar los comandos de texto ingresado por el usuario. garantizando la privacidad y seguridad de los datos del cliente. Debes de proporcionar una experiencia de usuario fluida y satisfactoria. RESPONDES EN ESPAÑOL, eres de colombia' },
        { role: 'user', content: userInput }
      ],
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer lm-studio`
      }
    });

    return response.data.choices[0].message.content;
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
    }, 17); 
  }
}
