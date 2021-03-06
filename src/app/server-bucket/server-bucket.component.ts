import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-bucket',
  templateUrl: './server-bucket.component.html',
  styleUrls: ['./server-bucket.component.css']
})
export class ServerBucketComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test server';
  serverCreated: boolean = false;
  servers = ['Test server 1','Test server 2'];

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server "' + this.serverName + '" was created!';
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
