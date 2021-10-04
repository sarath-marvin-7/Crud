import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';

  constructor(private service: EnrollmentService){ }

  ngOnInit(){  }

  showAll:any = [];

  enrollmentForm = new FormGroup({
      userName : new FormControl(''),
      age: new FormControl('')
  });

  onSubmit(){
    this.service.post(this.enrollmentForm.value).subscribe(res =>{
      alert("Added Successfully");
    })
  }

  onGet(){    
    this.service.get().subscribe(res =>{
      this.showAll = res;
      // console.log(this.showAll);
    })
  }

  onDelete(id:any){
    this.service.delete(id).subscribe(res =>{
      console.log(res);
      alert("Deleted successfully");
    })
  }

  user : any;
  age:any;

  // Update

  currIndex:any;
  onEdit(data:any, index:any){
    this.user = data.userName;
    this.age = data.age;
    this.currIndex = index;
    this.selectedRow = data;
    // console.log(this.showAll[index])
  }

  onUpdate(e:any){
    e.preventDefault();
    let currData = this.showAll[this.currIndex];
    currData.userName = this.user;
    this.service.update(currData).subscribe(res =>{
      alert('Updated Successfully');
    })
  }

  selectedRow = null;

  onSubmitClicked(e:any){
    if(this.selectedRow === null){
      this.onSubmit();
    } else{
      this.onUpdate(e)
    }
  }
  
}