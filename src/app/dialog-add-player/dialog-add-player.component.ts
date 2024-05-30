import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit{
  name:string = '';
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,) { }

  onNoClick(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
