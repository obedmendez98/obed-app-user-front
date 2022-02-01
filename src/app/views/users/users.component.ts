import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AddUserComponent } from 'src/app/components/add-user/add-user.component';
import { UpdateUserComponent } from 'src/app/components/update-user/update-user.component';
import { User } from 'src/app/models/interface';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: User[] = [];
  ll$: Observable<boolean> = new Observable()
  public filteredString:string = ''

  constructor(
    private readonly userfc: UserFacade,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.userfc.loadUsers();
    this.ll$ = this.userfc.loaded$
    
    this.userfc.loaded$.pipe(
      filter((isLoaded: boolean) => isLoaded === true),
      switchMap(() => this.userfc.allUsers$)
    ).subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    });
  }

  onDelete(id:any){
    this.userfc.deleteUser(parseInt(id))
  }

  onCreate(){
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onUpdate(user:User){
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '350px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}