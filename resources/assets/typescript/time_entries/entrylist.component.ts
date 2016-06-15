import { Component, OnInit, OnChanges, Input , ViewChild } from '../../../../node_modules/@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {AlertComponent, DATEPICKER_DIRECTIVES, MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from '../../../../node_modules/ng2-bootstrap/ng2-bootstrap';
import { MODAL_DIRECTIVES,ModalComponent } from '../../../../node_modules/ng2-bs3-modal/ng2-bs3-modal';

import { TimesheetService } from './timesheet.service';

@Component ( {
    selector: 'time-entry-list',
    templateUrl: 'templates/TimeEntryList.html',
    directives: [AlertComponent, DATEPICKER_DIRECTIVES, MODAL_DIRECTVES, CORE_DIRECTIVES, MODAL_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    providers: [TimesheetService]
})

export class EntryListComponent implements OnInit, OnChanges  {
    @Input() timesheetnew: any;
    constructor(private TimesheetService:TimesheetService) {
    }

    @ViewChild('modal')
    modal: ModalComponent;
    backdrop: string | boolean = true;

    closed() {
        console.log("I AM CLOSED")
    }

    dismissed() {
        console.log("I AM DISMISSED")
    }

    opened() {
        console.log("I AM OPENED")
    }

    openModal(id) {
        console.log("DELETE ID ", id);
        this.modal.open();
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