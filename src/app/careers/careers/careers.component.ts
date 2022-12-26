import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  jobForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    resume: new FormControl('', Validators.required),
  })
  constructor(private _apiService: BlogService) { }

  ngOnInit(): void {
  }
  get currentForm() {
    return this.jobForm.controls;
  }

  saveJob() {
    const enquiryBody = {
      FirstName: this.jobForm.controls['first_name'].value,
      LastName: this.jobForm.controls['last_name'].value,
      Email: this.jobForm.controls['email'].value,
      Mobile: this.jobForm.controls['mobile'].value,
      Description: this.jobForm.controls['Description'].value,
      resume: this.jobForm.controls['resume'].value,

    }
    this._apiService.saveEnquiry(enquiryBody).subscribe((response: any) => {
      if (response) {
        console.log("hello")
        this.jobForm.reset();
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

  customOption: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 50,

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 7000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4.5
      }
    },
    nav: true
  }

}
