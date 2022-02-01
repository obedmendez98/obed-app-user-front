import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/interface';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  public userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    firstname: ['', [Validators.required, Validators.minLength(3)] ],
    lastname: ['', [Validators.required, Validators.minLength(3)] ],
    address: ['', [Validators.required, Validators.minLength(3)] ],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ],
  });


  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private readonly userfc: UserFacade,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
  }

  onRegister(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      const newUser:User = {
        name:this.userForm.value.name,
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        address:this.userForm.value.address,
        phone: this.userForm.value.phone
      }
      this.userfc.addUser(newUser)
      this.dialogRef.close();
    }else{
      alert('Rellena correctamente el formulario')
    }
  }

}