import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  showText: boolean;
  buttonText: string;
  log = [];

  ngOnInit() {
    this.showText = false;
    this.buttonText = "Show Text"
  }

  onToggleDetails() {
    this.showText = !this.showText;

    if (this.showText) {
      this.buttonText = "Hide Text"
    } else {
      this.buttonText = "Show Text"
    }
    this.log.push(new Date());
  }

}
