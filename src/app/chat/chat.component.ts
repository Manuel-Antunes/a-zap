import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  conversations = [
    {
      owner: 'mane1',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 1
    },
    {
      owner: 'mane2',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 2
    },
    {
      owner: 'mane3',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
    {
      owner: 'mane',
      photoURL: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png',
      lastMessageDate: new Date(),
      id: 3
    },
  ]

  public selectedConversation?: any

  constructor() { }

  ngOnInit(): void {
  }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation
  }

}
