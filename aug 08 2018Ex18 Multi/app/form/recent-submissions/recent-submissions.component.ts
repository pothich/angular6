import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-submissions',
  templateUrl: './recent-submissions.component.html',
  styleUrls: ['./recent-submissions.component.scss']
})
export class RecentSubmissionsComponent implements OnInit {
  submissions: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.initSubmissions();
  }

  initSubmissions() {
    this.submissions = [
      {name: 'John', email: 'john@gmail.com'},
      {name: 'Samantha', email: 'sam@gmail.com'},
      {name: 'Cassandra', email: 'cass@gmail.com'},
      {name: 'Taylor', email: 'taylor@gmail.com'},
      {name: 'Fatima', email: 'fatima@gmail.com'}
    ]
  }

}
