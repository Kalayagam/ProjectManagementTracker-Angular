import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {
  errormessage: string = "";
  constructor(private service: SharedServiceService) { }

  //initializing variables
  GetTeamMembersList: any = [];
  ModalTitle: string = "";
  ActivateAddUpdateMemberComp: boolean = false;
  dep: any = '';

  ngOnInit(): void {
    this.refreshGetTeamMembersList();
  }

  addClick() {
    this.dep = {
      name: "",
      mID: 0,
      yearsofExperience: 0,
      description: "",
      projectStartDate: "",
      projectEndDate: "",
      skillSet: 0,
      allocation: 0
    }
    this.ModalTitle = "Add Team Member Details";
    this.ActivateAddUpdateMemberComp = true;
  }

  assignClick() {
    this.dep = {
      name: "",
      mID: 0,
      taskName: "",
      deliverables: "",
      taskStartDate: "",
      taskEndDate: ""
    }
    this.ModalTitle = "Assign Task to Team Member";
    this.ActivateAddUpdateMemberComp = true;
  }

  closeClick() {
    this.ActivateAddUpdateMemberComp = false;
    this.refreshGetTeamMembersList();
  }

  editClick() {
    this.dep = {
      allocation: 0
    }
    this.ModalTitle = "Update Allocation Percentage";
    this.ActivateAddUpdateMemberComp = true;
  }

  refreshGetTeamMembersList() {
    this.service.getTeamMembersList().subscribe(data => {
      this.GetTeamMembersList = data;
    }, error => this.errormessage = error.message);
  }
}
