import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input()
  public owner!: string

  @Input()
  public photoURL!: string

  @Input()
  public lastMessageDate!: Date


  public get formatedLastMessageDate() {
    return format(this.lastMessageDate, 'hh:mm')
  }

  ngOnInit(): void {
  }

}
