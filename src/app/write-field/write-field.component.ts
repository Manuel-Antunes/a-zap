import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-write-field',
  templateUrl: './write-field.component.html',
  styleUrls: ['./write-field.component.scss']
})
export class WriteFieldComponent implements OnInit {

  @Input()
  conversation!: any

  get messages() {
    return this.messageService.getMessages(this.conversation)
  }

  message: string = ''

  constructor(private messageService: MessageService) { }

  ngOnInit() { }

  sendMessage() {
    this.messageService.sendMessage(this.conversation.id, { text: this.message, date: new Date(), my: true })
  }

}
