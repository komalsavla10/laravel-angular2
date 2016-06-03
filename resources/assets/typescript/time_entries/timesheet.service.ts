import { Injectable }    from '../../../../node_modules/@angular/core';
import { Headers, Http } from '../../../../node_modules/@angular/http';
import '../../../../node_modules/rxjs/add/operator/toPromise';
@Injectable()

export class TimesheetService {
    constructor(private http: Http) { }
    private saveTimesheetUrl = 'time-entry/save';  // URL to web api
    private getTimesheetsUrl = 'time-entry/all';  // URL to web api

    getToken() {
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        return token;
    }

    getTimesheets(): Promise<any> {
        return this.http.get(this.getTimesheetsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    // Add new Hero
    post(timesheet: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json', 'X-CSRF-TOKEN': this.getToken()});
        return this.http
            .post(this.saveTimesheetUrl, JSON.stringify(timesheet), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}