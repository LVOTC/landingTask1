import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  MainComponent} from '../main/main.component';
import { Contacts } from './contacts';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalService} from './modal.service';
import { Router, ActivatedRoute } from '@angular/router'; // importuoti routinga
import { NgForm } from '@angular/forms'; // importuoju formas is angular
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  complexForm : FormGroup;
  contact: Contacts = new Contacts();
  key: any;
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cS: ModalService,
    private router: Router,
    private aR: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.complexForm = fb.group({
          // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
          'fullName' : [null, Validators.required],
          // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
          'email': [null, [<any>Validators.required, <any>Validators.email]],
          'phone' : [null],
          'text' : [null],
          'checkbox' : ["", Validators.required],
        })
   }
   getErrorMessage() {
       return this.email.hasError('required') ? 'You must enter a email' :
           this.email.hasError('email') ? 'Not a valid email' :
               '';
     }
     openDialog() {
       this.dialogRef.close();
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      height: '300px',
      width: '600px'
    });
  }
  ngOnInit() {
    this.aR.params.subscribe(
      result => {
        this.key = result['id'];
        if(!this.key){
          return;
        }
      }
    )
  }
  onSave(form: NgForm){
    this.cS.create(form.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
