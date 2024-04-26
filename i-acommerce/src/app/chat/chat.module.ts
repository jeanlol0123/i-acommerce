import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatPageRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
