import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Team Generator';

  newMemberName = '';
  members: string[] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    this.members.push(this.newMemberName);
  }
}
