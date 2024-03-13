import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'homepage',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private snack:MatSnackBar){ }

  ngOnInit(): void {
  }
  btnClick()
  {
    // console.log("Button clicked");
    this.snack.open("Snackbar Clicked and opened", "Cancel");
  }
}
