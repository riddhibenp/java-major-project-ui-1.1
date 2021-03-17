import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  courses: any
  videoForm!: FormGroup;
  url: any;
  path: any;
  
  constructor(private as: AdminService,private router:Router) { }

  ngOnInit(): void {

    this.videoForm = new FormGroup({
      courseId: new FormControl('', [Validators.required]),
     videoName: new FormControl('', [Validators.required, Validators.minLength(5)]),
     videoDesc: new FormControl('', [Validators.required, Validators.minLength(10)]),
     videoPath:new FormControl('', [Validators.required])
  })
  this.as.getCourses()
  .subscribe((data)=>{
    
    
    this.courses=data;
    console.log(this.courses.courseName);
    // console.log("glfjkdsghlgkjds");
    
  },
  (err)=>{
    console.log('Error is:',err);
    
  });





}


addVideo(){
  console.log(this.videoForm.value)

   //remove fakepath from image url
    //ASSUMPTION: SELECT IMAGE FROM ASSETS ONLY!
    this.path=this.videoForm.value.videoPath
    this.videoForm.value.videoPath = this.path.replace(/^.*\\/, "../../../assets/")

  this.as.addVideo(this.videoForm.value.videoName, this.videoForm.value.videoDesc,this.videoForm.value.videoPath,  this.videoForm.value.courseId).subscribe((data)=>{
    this.router.navigate(['/videos'])


  })
}

selectedCourse(courseId: any){
  console.log(courseId);
  
}

readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}

}