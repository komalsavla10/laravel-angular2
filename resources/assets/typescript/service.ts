import { Injectable }    from '../../../node_modules/@angular/core';
import { Headers, Http } from '../../../node_modules/@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
@Injectable()

export class Service {
    constructor(private http: Http) { }
    private heroesUrl = 'test';  // URL to web api

    getToken() {
        let token = document.querySelector('meta[property="csrf-token"]')['content'];
        return token;
    }

    // Add new Hero
    post(hero: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json', 'X-CSRF-TOKEN': this.getToken()});
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}