import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  enquiryForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  public first_name: any;
  public last_name: any;
  public email: any;
  public subject: any;
  public Message: any;
  public mobile: any;
  public blog: any;
  constructor(private _apiService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  get currentForm() {
    return this.enquiryForm.controls;
  }

  saveEnquiry() {
    const enquiryBody = {
      FirstName:this.enquiryForm.controls['first_name'].value,
      LastName: this.enquiryForm.controls['last_name'].value,
      Email: this.enquiryForm.controls['email'].value,
      Mobile: this.enquiryForm.controls['mobile'].value,
      Subject: this.enquiryForm.controls['subject'].value,
      Message: this.enquiryForm.controls['message'].value,

    }
    this._apiService.saveEnquiry(enquiryBody).subscribe((response: any) => {
      if (response) {
        console.log("hello")
        this.enquiryForm.reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        console.log("hello error")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    });
  }
  getBlog() {
    this._apiService.getBlogDetail().subscribe((response: any) => {
      if (response) {
        this.blog = response;
      }
    })
  }
}


