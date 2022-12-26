import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemberDetailsComponent } from './show-member-details.component';

describe('ShowMemberDetailsComponent', () => {
  let component: ShowMemberDetailsComponent;
  let fixture: ComponentFixture<ShowMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMemberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
