import { Component, OnInit, Inject, NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  ModalComponent} from '../modal/modal.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }

}
