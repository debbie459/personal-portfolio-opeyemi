import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  userObjects = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form Submitted!', this.userObjects);
      alert("Thank you for your message!")
      form.resetForm();
    }
  }

}

