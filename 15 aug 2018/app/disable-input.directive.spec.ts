import { StudentComponent } from './student.component';
import { DisableInputDirective } from './disable-input.directive';
import { async, ComponentFixture} from '@angular/core/testing';
import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
describe('DisableInputDirective', () => {

  let fixture;
  let component: StudentComponent;

  beforeEach(() => {
    fixture= TestBed.configureTestingModule({
      declarations: [ StudentComponent, DisableInputDirective]
    })
    .createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display original title', () => {

    let inputEl = fixture.debugElement.query(By.css('input'));
    inputEl.nativeElement.value="admin";

    inputEl.triggerEventHandler('change', null);    
    
    expect(inputEl.nativeElement.style.border).toBe('1px solid red');

    inputEl.nativeElement.value="s1";
    
    inputEl.triggerEventHandler('change', null);

    expect(inputEl.nativeElement.style.border).toBe('');


  });
});
