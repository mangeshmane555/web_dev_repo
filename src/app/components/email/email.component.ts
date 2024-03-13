import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from '../../service/emailservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit{
  // Javascript object as data for property binding
  data = {
    to : "",
    subject : "",
    message : ""
  }
//Setting flag for the spinner show/hide
flag = false; //Initially declared to hide spinner

  //Injecting services
  constructor(private email: EmailserviceService, private snack :MatSnackBar)
  {
  }
  //
  ngOnInit(): void 
  {
  }
  //Event binding function on form submission
  doSubmitForm()
  {
    console.log("data = ", this.data);
    //
    console.log("to= "+this.data.to);
    console.log("subject= "+this.data.subject);
    console.log("message= "+this.data.message);

    if(this.data.to == '' || this.data.subject == '' || this.data.message == '')
    {
        this.snack.open("Fields cannot be empty");
        return;
    }
    //
    this.flag=true; // True means It will display at the time of function call 
    this.email.sendEmail(this.data)
    .subscribe(
      response=>{
        console.log(response);
        this.flag=false; // It will again hide when the response comes
        this.snack.open("Sent Successfully", "OK");
      }, 

      error=>{
        console.log(error);
        this.flag=false;
        this.snack.open("Error Occurred ! ", "OK");
      }
      );
  }
}
