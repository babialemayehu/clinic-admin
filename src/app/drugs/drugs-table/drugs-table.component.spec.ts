
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsTableComponent } from './drugs-table.component';

describe('DrugsTableComponent', () => {
  let component: DrugsTableComponent;
  let fixture: ComponentFixture<DrugsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
