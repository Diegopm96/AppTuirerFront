import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitCrearComponent } from './tuit-crear.component';

describe('TuitCrearComponent', () => {
  let component: TuitCrearComponent;
  let fixture: ComponentFixture<TuitCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuitCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuitCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
