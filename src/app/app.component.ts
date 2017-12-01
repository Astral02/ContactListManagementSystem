import { Component } from '@angular/core';

import { ContactList } from './contact'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact list management system';
   cl: ContactList[] = [
    { FirstName: 'Vikas', LastName: 'Garg', Gender: 'Male', Mobile: 123456789, Address: 'Doral, Miami', Role: 'Admin', Email: 'a@a.com' },
    { FirstName: 'Anjali', LastName: 'Sharma', Gender: 'Female', Mobile: 987654321, Address: 'Doral, Miami', Role: 'User', Email: 'b@b.com'}
  ];
}



