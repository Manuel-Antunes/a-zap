import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ConversationComponent } from '../conversation/conversation.component';
import { WriteFieldComponent } from '../write-field/write-field.component';
import { DateFnsModule } from 'ngx-date-fns';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent,
    ConversationComponent,
    WriteFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DateFnsModule.forRoot()
  ]
})
export class ChatModule { }
