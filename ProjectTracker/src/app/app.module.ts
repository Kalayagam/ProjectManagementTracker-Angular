import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMembersComponent } from './Manager/show-members/show-members.component';
import { AddMembersComponent } from './Manager/add-members/add-members.component';
import { UpdateAllocationComponent } from './Manager/update-allocation/update-allocation.component';
import { ShowMemberDetailsComponent } from './Member/show-member-details/show-member-details.component';
import { SharedServiceService } from './shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './Manager/manager.component';
import { MemberComponent } from './Member/member.component';
import { AssignTaskComponent } from './Manager/assign-task/assign-task.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShowMembersComponent,
    AddMembersComponent,
    UpdateAllocationComponent,
    ShowMemberDetailsComponent,
    ManagerComponent,
    MemberComponent,
    AssignTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedServiceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
