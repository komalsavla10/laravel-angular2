import { Component } from '../../../../node_modules/@angular/core';
import { TimesheetService } from './timesheet.service';
import { EntryListComponent } from './entrylist.component';
import {AlertComponent, DATEPICKER_DIRECTIVES} from '../../../../node_modules/ng2-bootstrap/ng2-bootstrap';


@Component ( {
    selector: 'time-entry-form',
    templateUrl: 'templates/TimeEntryForm.html',
    directives: [AlertComponent, DATEPICKER_DIRECTIVES, EntryListComponent],
    providers: [TimesheetService]
})

export class EntryFormComponent {
    constructor(private TimesheetService: TimesheetService) {}

    error: any;
    timesheetnew: {};
    timesheet = {id: '1', description: 'kks', date: 'sdasf'};
    date: Date = new Date();
    public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
    public format:string = this.formats[0];
    public dateOptions:any = {
        formatYear: 'YY',
        startingDay: 1
    };
    datepickerOpenend: boolean = false;

    openDatepicker() {
        this.datepickerOpenend = true;
    }

    closeDatepicker(udpateddate) {
        this.timesheet.date = udpateddate.toDateString();
        console.log(udpateddate);
        this.datepickerOpenend = false;
    }

    onSubmit(data) {
        this.TimesheetService
            .post(data)
            .then(timsheet => {
                this.timesheetnew = timsheet.data;
                console.log(timsheet)
                /* this.hero = hero; // saved hero, w/ id if new
                 this.goBack(hero);*/
            })
            .catch(error => this.error = error); // TODO: Display error message
       console.log(data);
    }
    // Date Picker //
}

