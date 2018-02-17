import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'; // importuoju, kad galeciau irasyti duomenis i database
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ModalService {
  contacts: AngularFireList<any>;
  constructor(
    private afd: AngularFireDatabase
  ) {
    this.contacts = afd.list('contacts');
  }
  getAll(){
    return this.contacts.snapshotChanges().map(
      changes => {
        return changes.map(
          mainChanges => ({
            key: mainChanges.payload.key,
            ...mainChanges.payload.val()
          })
        );
      }
    );
  }
    create(form:any){
    this.contacts.push(form);
  }
}
