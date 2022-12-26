import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service'
import { DatePipe } from '@angular/common';
import { ViewMember } from 'src/app/view-member';
import { count } from 'rxjs';

@Component({
  selector: 'app-show-member-details',
  templateUrl: './show-member-details.component.html',
  styleUrls: ['./show-member-details.component.css']
})
export class ShowMemberDetailsComponent implements OnInit {
  errormessage: string = "";
  constructor(private service: SharedServiceService, public datePipe: DatePipe) { }
  viewmemberModel = new ViewMember(0);
  //initializing variables
  getAllTeamMembersList: any = [];
  GetMemberData: any = [];
  val: any = '';
  mID: number = 0;
  taskStartDate: string = "";
  taskEndDate: string = "";
  flag: boolean = false;

  ngOnInit(): void {
    var val = {
      mID: this.viewmemberModel.mID,
      taskStartDate: this.taskStartDate,
      taskEndDate: this.taskEndDate
    };
  }

  ViewMemberDetails(val: any) {
    this.service.getMembersDetail(val).subscribe(data => {
      this.GetMemberData = data;
    }, error => this.errormessage = "Member ID is not assigned with any tasks");
  }
}

