import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogService } from '../services/blog.service';
declare var window: any;

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  public position: any;
  public positionDetailDTOs: any;
  public idPosition: any;
  public resume: any;
  public idCandidate: any;
  public positionById: any;

  resumeForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    ResumeUrl: new FormControl('', Validators.required),
  })
  constructor(private _apiService: BlogService) { }
  formModal: any;
  ngOnInit(): void {
    this.getPosition();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('FormModal')
    );
  }
  get currentForm() {
    return this.resumeForm.controls;
  }

  getPosition() {
    this._apiService.getPositionDetail('false').subscribe((response: any) => {
      if (response) {
        this.position = response;

        console.log(this.position);
        console.log(this.positionDetailDTOs);
      }
    })
  }
  showup(id: any) {
    debugger
    console.log(id)
    this._apiService.getPostionById(id).subscribe((response: any) => {
      if (response) {
        this.positionById = response;
        this.positionDetailDTOs = response.positionDetailDTOs;

        console.log(this.positionById);
        console.log(this.positionDetailDTOs);
      }
    })
  }

  applyJob(idJob: any) {
    debugger
    this.idPosition = idJob;
    console.log(this.idPosition)
    if (idJob == 'Others') {
      console.log("hi")
      this._apiService.getPositionDetail('true').subscribe((response: any) => {
        if (response) {
          this.position = response;

          console.log(this.position);
          var finda = this.position.filter((x: { Name: any; }) => x.Name =='Others');
          console.log(finda)
          this.idPosition = finda[0].IdPosition;
          console.log(this.idPosition)

        }
      })
    }
  }

  selectResume(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.resume = file;
      //this.imageUrl = file.name;

    }

  }
  saveResume() {
    debugger
    console.log(this.idPosition)
    const resumeBody = {
      FirstName: this.resumeForm.controls['first_name'].value,
      LastName: this.resumeForm.controls['last_name'].value,
      Email: this.resumeForm.controls['email'].value,
      Mobile: this.resumeForm.controls['mobile'].value,
      Description: this.resumeForm.controls['Description'].value,
      ResumeUrl: "",
      IdPosition: this.idPosition,

    }
    console.log(resumeBody)
    this._apiService.saveResume(resumeBody).subscribe((response: any) => {
      if (response) {
        this.idCandidate = response;
        this.mediaUpload(this.idCandidate);
        console.log("hello")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your resume has been sent',
          showConfirmButton: false,
          timer: 1500
        })
        this.resumeForm.reset();

        this.formModal.hide();
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

  mediaUpload(idCandidate: any) {
    console.log(idCandidate)
    const formdata = new FormData();
    formdata.append('UploadedDocs', "UploadedDocs");
    formdata.append('IdCandidate', idCandidate.IdCandidate);
    formdata.append('ResumeUrl', this.resume);

    this._apiService.saveResumeImage(formdata).subscribe((response: any) => {
      if (response) {
      } else {
        console.log("hello error")
      }
    });
    this.resumeForm.reset();
    //this.closebutton.nativeElement.click();
  }


  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 50,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 7000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
