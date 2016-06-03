import { Component, OnInit, OnChanges, Input } from '../../../../node_modules/@angular/core';
import { TimesheetService } from './timesheet.service';
import {AlertComponent, DATEPICKER_DIRECTIVES} from '../../../../node_modules/ng2-bootstrap/ng2-bootstrap';

@Component ( {
    selector: 'time-entry-list',
    templateUrl: 'templates/TimeEntryList.html',
    directives: [AlertComponent, DATEPICKER_DIRECTIVES],
    providers: [TimesheetService]
})

export class EntryListComponent implements OnInit, OnChanges  {
    @Input() timesheetnew: any;
    constructor(private TimesheetService:TimesheetService) {
    }

    error: any;
    timesheets = [];


    getTimesheets() {
        this.TimesheetService
            .getTimesheets()
            .then(timesheets => this.timesheets = timesheets)
            .catch(error => this.error = error); // TODO: Display error message
    }

    delete() {
        
    }

    ngOnInit() {
        this.getTimesheets()
    }

    ngOnChanges(changes) {
        if(changes.timesheetnew.currentValue) {
            let newtimesheet = changes.timesheetnew.currentValue;
            this.timesheets.push(newtimesheet);
        }
        console.log("INSDE CHANGED", changes);
        console.log("INSDE CHANGED", changes.timesheetnew);
    }

}