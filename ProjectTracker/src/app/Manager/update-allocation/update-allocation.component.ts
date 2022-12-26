import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Update } from 'src/app/update';

@Component({
  selector: 'app-update-allocation',
  templateUrl: './update-allocation.component.html',
  styleUrls: ['./update-allocation.component.css']
})

export class UpdateAllocationComponent implements OnInit {
  updateModel = new Update(0);
  successModal: boolean = false;
  errormessage: any;
  constructor(private service: SharedServiceService) { }
  @Input() dep: any;
  allocation: number = 0;
  ngOnInit(): void {
  }

  updateAllocationPercentage() {
    this.service.updateAllocation(this.updateModel.allocation).subscribe(result => {
      this.successModal = true;
    }, error => this.errormessage = error.message);
  }
}
