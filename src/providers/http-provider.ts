import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {

  private users: Object;
  constructor (public http: Http) {
  }
  public getUserData(): void {
    this.http.get('assets/db.json')
        .map(res => res.json())
        .subscribe(users => this.users = users);
  }
  public getUsers() {
    return this.users;
  }
  
  
}
