System.register(['../../../../node_modules/@angular/core', './timesheet.service', './entrylist.component', '../../../../node_modules/ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, timesheet_service_1, entrylist_component_1, ng2_bootstrap_1;
    var EntryFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timesheet_service_1_1) {
                timesheet_service_1 = timesheet_service_1_1;
            },
            function (entrylist_component_1_1) {
                entrylist_component_1 = entrylist_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            EntryFormComponent = (function () {
                function EntryFormComponent(TimesheetService) {
                    this.TimesheetService = TimesheetService;
                    this.timesheet = { id: '1', description: 'kks', date: 'sdasf' };
                    this.date = new Date();
                    this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
                    this.format = this.formats[0];
                    this.dateOptions = {
                        formatYear: 'YY',
                        startingDay: 1
                    };
                    this.datepickerOpenend = false;
                }
                EntryFormComponent.prototype.openDatepicker = function () {
                    this.datepickerOpenend = true;
                };
                EntryFormComponent.prototype.closeDatepicker = function (udpateddate) {
                    this.timesheet.date = udpateddate.toDateString();
                    console.log(udpateddate);
                    this.datepickerOpenend = false;
                };
                EntryFormComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    this.TimesheetService
                        .post(data)
                        .then(function (timsheet) {
                        _this.timesheetnew = timsheet.data;
                        console.log(timsheet);
                        /* this.hero = hero; // saved hero, w/ id if new
                         this.goBack(hero);*/
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                    console.log(data);
                };
                EntryFormComponent = __decorate([
                    core_1.Component({
                        selector: 'time-entry-form',
                        templateUrl: 'templates/TimeEntryForm.html',
                        directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, entrylist_component_1.EntryListComponent],
                        providers: [timesheet_service_1.TimesheetService]
                    }), 
                    __metadata('design:paramtypes', [timesheet_service_1.TimesheetService])
                ], EntryFormComponent);
                return EntryFormComponent;
            }());
            exports_1("EntryFormComponent", EntryFormComponent);
        }
    }
});

//# sourceMappingURL=entryform.component.js.map
