import { Component, OnInit } from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];
  showSecrect = false;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onReset() {
    this.serverName = '';
  }

  onToggleDetails() {
    this.showSecrect = !this.showSecrect;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
