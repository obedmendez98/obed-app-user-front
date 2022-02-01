import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/interface';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})

export class UpdateUserComponent implements OnInit {

  public userForm: FormGroup = this.fb.group({
    name: [this.data.name, [Validators.required, Validators.minLength(3)] ],
    firstname: [this.data.firstname, [Validators.required, Validators.minLength(3)] ],
    lastname: [this.data.lastname, [Validators.required, Validators.minLength(3)] ],
    address: [this.data.address, [Validators.required, Validators.minLength(3)] ],
    phone: [this.data.phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ],
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private readonly userfc: UserFacade,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {}

  onUpdate(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      const newUser:User = {
        name:this.userForm.value.name,
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        address:this.userForm.value.address,
        phone: this.userForm.value.phone
      }

      this.userfc.updateUser(newUser,this.data.id)
      this.dialogRef.close();
    }else{
      alert('Rellene correctamente el formulario')
    }
  }

}