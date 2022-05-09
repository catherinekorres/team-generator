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
  errorNoMemberName = '';

  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  errorInvalidNumberOfTeams = '';

  onMemberInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    const number = Number(value);
    if(isNaN(number)) {
      this.errorInvalidNumberOfTeams = "This input accepts only numeric values";
      return;
    }

    this.numberOfTeams = number;
  }

  addMember() {
    if(!this.newMemberName) {
      this.errorNoMemberName = "A name is required to add a member";
      return;
    }

    this.errorNoMemberName = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  generateTeams() {
    if(!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorInvalidNumberOfTeams = "Invalid number of teams";
      return;
    }

    if(this.members.length < this.numberOfTeams) {
      this.errorInvalidNumberOfTeams = "Not enough members for the specified number of teams";
      return;
    }

    this.errorInvalidNumberOfTeams = '';
    this.teams = [];
    const allMembers = [...this.members];

    while(allMembers.length) {
      for(let i=0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member) break;

        if(this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
