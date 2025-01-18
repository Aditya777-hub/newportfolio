import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  user: any[] = [];
  contactobj: any = {
    Name: '',
    Email: '', 
    Message: ''
  }

  ngOnInit(): void {
    const local = localStorage.getItem('user');
    if (local != null) {
      this.user = JSON.parse(local);
    }
  }

  sendMessage() {
    // Validate required fields
    if (!this.contactobj.Name || !this.contactobj.Email || !this.contactobj.Message) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactobj.Email)) {
      alert('Please enter a valid email address');
      return;
    }

    const userExist = this.user.find(
      m => m.Name === this.contactobj.Name && m.Email === this.contactobj.Email
    );
  
    if (!userExist) {
      // Create a new object instead of pushing reference
      const newContact = {
        Name: this.contactobj.Name,
        Email: this.contactobj.Email,
        Message: this.contactobj.Message
      };
      
      this.user.push(newContact);
      localStorage.setItem('user', JSON.stringify(this.user));
  
      // Reset the form
      this.contactobj = { Name: '', Email: '', Message: '' };
  
      alert('Thank you for getting in touch!');
    } else {
      alert('A user with this name and email already exists.');
    }
  }
}
