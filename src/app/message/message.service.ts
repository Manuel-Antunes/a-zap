import { Injectable } from '@angular/core';
const conversations = {
  '1': [
    { text: 'Oi', date: new Date(), my: false },
  ],
  '2': [
    { text: 'Iae Pivet', date: new Date(), my: false },
    { text: 'Yooo', date: new Date(), my: false },
  ],
  '3': [
    { text: 'Yamete', date: new Date(), my: false },
    { text: 'Kudasai', date: new Date(), my: false },
    { text: 'Lek', date: new Date(), my: false },
    { text: 'Yamete', date: new Date(), my: false },
    { text: 'Kudasai', date: new Date(), my: false },
    { text: 'Lek', date: new Date(), my: false },
    { text: 'Yamete', date: new Date(), my: false },
    { text: 'Kudasai', date: new Date(), my: false },
    { text: 'Lek', date: new Date(), my: false },
    { text: 'Yamete', date: new Date(), my: false },
    { text: 'Kudasai', date: new Date(), my: false },
    { text: 'Lek', date: new Date(), my: false },
    { text: 'Yamete', date: new Date(), my: false },
    { text: 'Kudasai', date: new Date(), my: false },
    { text: 'Lek', date: new Date(), my: false },
  ],
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(conversation: any) {
    const id = conversation.id as 1 | 2 | 3
    return conversations[id]
  }

  sendMessage(conversationId: number, message: any) {
    conversations[conversationId as 1 | 2 | 3].push(message)
  }

}
