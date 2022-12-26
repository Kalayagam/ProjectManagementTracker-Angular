import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/shared-service.service';
import { AddMember } from 'src/app/add-member';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  memberModel = new AddMember('', 0, "", 0, '', '', '', 0, 0);
  errormessage: string = "";
  constructor(private service: SharedServiceService) { }
  @Input() dep: any;

  addTeamMembersList: any = [];
  successModal: boolean = false;

  ngOnInit(): void {
    this.memberModel = new AddMember(this.dep.name, this.dep.mID, "", this.dep.yearsofExperience,
      this.dep.description, this.dep.projectStartDate, this.dep.projectEndDate, this.dep.skillSet, this.dep.allocation);

  }

  AddMember() {
    console.log(this.memberModel);
    this.service.addTeamMembersList(this.memberModel).subscribe(res =>
      this.successModal = true, error => this.errormessage = error.message)
  };
}

