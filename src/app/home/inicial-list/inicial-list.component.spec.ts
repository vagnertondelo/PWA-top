import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialListComponent } from './inicial-list.component';

describe('InicialListComponent', () => {
  let component: InicialListComponent;
  let fixture: ComponentFixture<InicialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
