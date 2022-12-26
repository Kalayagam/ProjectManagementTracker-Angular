import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddMember } from './add-member';
import { AssignTask } from './assign-task';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly managerAPI = "http://localhost:55781/api";
  readonly memberAPI = "http://localhost:55791/api";
  constructor(private http: HttpClient) {

  }

  generateParamFromObject(object: { [key: string]: string }): HttpParams {
    let params = new HttpParams();
    Object.entries(object).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          params = params.append(key, value);
        })
      } else {
        params = params.append(key, value);
      }
    });
    return params;
  }

  private handleError(error: HttpErrorResponse) {
    let errormessage = "";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      errormessage = ` ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    //errormessage += 'Something bad happened; please try again later.'
    return throwError(() => new Error(errormessage));
  }


  getTeamMembersList(): Observable<any[]> {
    return this.http.get<any>(this.managerAPI + "/manager/list").pipe(catchError(this.handleError));
  }


  addTeamMembersList(val: AddMember) {
    return this.http.post<any>(this.managerAPI + "/manager/AddMember", val).pipe(catchError(this.handleError));
  }

  updateAllocation(val: number) {
    //const params = new HttpParams(val);
    // const params = this.generateParamFromObject(val);
    //const body = {} // body request
    return this.http.patch(this.managerAPI + "/manager/update/" + `${val}`, val).pipe(catchError(this.handleError));
  }

  getProjectMemberDetails(val: number) {

    return this.http.get(this.memberAPI + "/manager/list/" + `${val}`).pipe(catchError(this.handleError));
  }

  getMembersDetails(): Observable<any[]> {
    return this.http.get<any>(this.memberAPI + "/member/Get").pipe(catchError(this.handleError));
  }

  getMembersDetail(val: number) {

    return this.http.get(this.memberAPI + "/member/list/" + `${val}`).pipe(catchError(this.handleError));
  }

  assignTask(val: AssignTask) {
    return this.http.post(this.memberAPI + "/member/assignTask", val).pipe(catchError(this.handleError));
  }
}
