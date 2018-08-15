import { StudentService } from './student.service';
import { Student } from './student';
import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';



describe('StudentService', () => {

  let injector;
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    });

    injector = getTestBed();
    service = injector.get(StudentService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getStudents', () => {
    it('should return an Observable<Student[]>', () => {
      const dummyStudents: Student[] = [
        new Student(1, 's1'),
        new Student(2, 's2')
      ];

      service.getStudents().subscribe(students => {
        expect(students.length).toBe(2);
        expect(students).toEqual(dummyStudents);
      });

      const req = httpMock.expectOne(`http://localhost:3000/students`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyStudents);

    });
  });

  describe('#getStudentById', () => {
    it('should return an Observable<Student>', () => {
      const dummyStudent: Student = new Student(1, 's1');

      service.getStudentById(1).subscribe(student => {
        expect(student.id).toBe(1);
        expect(student.name).toEqual("s1");
      });

      const req = httpMock.expectOne(`http://localhost:3000/students/1`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyStudent);

    });
  });
});
