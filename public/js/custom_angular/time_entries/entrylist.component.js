System.register(['../../../../node_modules/@angular/core', './timesheet.service', '../../../../node_modules/ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, timesheet_service_1, ng2_bootstrap_1;
    var EntryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timesheet_service_1_1) {
                timesheet_service_1 = timesheet_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            EntryListComponent = (function () {
                function EntryListComponent(TimesheetService) {
                    this.TimesheetService = TimesheetService;
                    this.timesheets = [];
                }
                EntryListComponent.prototype.getTimesheets = function () {
                    var _this = this;
                    this.TimesheetService
                        .getTimesheets()
                        .then(function (timesheets) { return _this.timesheets = timesheets; })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                EntryListComponent.prototype.ngOnInit = function () {
                    this.getTimesheets();
                };
                EntryListComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.timesheetnew.currentValue) {
                        var newtimesheet = changes.timesheetnew.currentValue;
                        this.timesheets.push(newtimesheet);
                    }
                    console.log("INSDE CHANGED", changes);
                    console.log("INSDE CHANGED", changes.timesheetnew);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EntryListComponent.prototype, "timesheetnew", void 0);
                EntryListComponent = __decorate([
                    core_1.Component({
                        selector: 'time-entry-list',
                        templateUrl: 'templates/TimeEntryList.html',
                        directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES],
                        providers: [timesheet_service_1.TimesheetService]
                    }), 
                    __metadata('design:paramtypes', [timesheet_service_1.TimesheetService])
                ], EntryListComponent);
                return EntryListComponent;
            }());
            exports_1("EntryListComponent", EntryListComponent);
        }
    }
});

//# sourceMappingURL=entrylist.component.js.map
