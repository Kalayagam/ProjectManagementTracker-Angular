import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedServiceService } from 'src/app/shared-service.service';
import { AssignTask } from 'src/app/assign-task';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  assignTaskModel = new AssignTask('', 0, "", "", "", "");
  successModal: boolean = false;
  memberProjectDate: any;
  isDateChecked: boolean = false;
  errormessage: string = "";
  constructor(private service: SharedServiceService) { }
  @Input() dep: any;
  // memberId: string = "";
  // memberName: string = "";
  // taskName: string = "";
  // deliverables: string = "";
  // taskStartDate: string = "";
  // taskEndDate: string = "";


  ngOnInit(): void {
    // this.memberId = this.dep.memberId;
    // this.memberName = this.dep.memberName;
    // this.taskName = this.dep.taskName;
    // this.deliverables = this.dep.deliverables;
    // this.taskStartDate = this.dep.taskStartDate;
    // this.taskEndDate = this.dep.taskEndDate;



    this.assignTaskModel = new AssignTask(this.dep.memberName, this.dep.mID, this.dep.taskName, this.dep.deliverables, this.dep.taskStartDate, this.dep.taskEndDate);


  }

  // dateCheck() {
  //   this.service.getProjectMemberDetails(this.assignTaskModel.mID).subscribe(res => {
  //     console.log(res);
  //     this.memberProjectDate = res;
  //     this.isDateChecked = true;
  //   });
  // }

  AssignTask() {
    console.log(this.assignTaskModel);
    this.service.assignTask(this.assignTaskModel).subscribe(res => {
      this.successModal = true;
    }, error => this.errormessage = error.message);
  }
}

