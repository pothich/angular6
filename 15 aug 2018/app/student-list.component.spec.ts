import { StudentListComponent } from './student-list.component';
import { async, ComponentFixture} from '@angular/core/testing';

import { StudentService } from './student.service';
import { Student } from './student';
import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;
  let p:        HTMLElement;
  let table:        HTMLElement;
  let injector;
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListComponent ],
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(StudentService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
    table = fixture.nativeElement.querySelector('table');
  });

  it('should display original title', () => {
    expect(p.textContent).toContain(component.message);

    const dummyStudents: Student[] = [
      new Student(1, 's1'),
      new Student(2, 's2')
    ];

    const req = httpMock.expectOne(`http://localhost:3000/students`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyStudents);

    fixture.detectChanges();

    expect(table.innerHTML).toContain("tr");

    console.log(table.innerHTML);

    
  });
});
