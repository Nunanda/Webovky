import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket, io } from 'socket.io-client';
import { NavodyService } from 'src/app/service';
import { Navod } from 'src/app/types';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  private socket!: Socket;

  ngOnInit(): void {
    this.socket = io('https://selecro.freemyip.com:4000');

    this.socket.on('message', (message) => {
      console.log('Received message:', message);

      // Handle the received message
    });

    // Send a message to the server
    this.socket.emit('message', 'Hello, server!');
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
