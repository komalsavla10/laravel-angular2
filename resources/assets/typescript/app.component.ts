import { Component } from '../../../node_modules/@angular/core';
import { Service } from './service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><button (click)="tryPost()">POST</button>',
    providers: [
        Service,
    ]
})
export class AppComponent {
    error: any;
    constructor(private service: Service) {
    }

    tryPost() {
        this.service
            .post({name:'komal'})
            .then(hero => {
                console.log(hero.data)
               /* this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);*/
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
}