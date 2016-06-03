/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../../node_modules/zone.js/dist/zone.js.d.ts" />
System.register(['../../../node_modules/@angular/platform-browser-dynamic', '../../../node_modules/@angular/http', '../../../node_modules/rxjs/Rx', './time_entries/entryform.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, entryform_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (entryform_component_1_1) {
                entryform_component_1 = entryform_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(entryform_component_1.EntryFormComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=boot.js.map
