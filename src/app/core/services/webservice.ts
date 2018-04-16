import {
    Http,
    Headers,
    RequestOptions
  } from '@angular/http';
  import {
    Injectable
  } from '@angular/core';
  import {
    Router
  } from '@angular/router';
  import {
    Observable
  } from 'rxjs/Observable';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/catch';
  import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatSort} from '@angular/material';
  import {AlertDialogComponent} from '../../dialog/alert-dialog/alert-dialog.component'
    @Injectable()
  export class WebService {
    userSetdate:any;
    
    User: any;
    BASE_URL = 'http://35.231.4.206/elyceum/';
    CREATE_USER ='user/signup';
     constructor( private _http: Http, private router: Router,public dialog: MatDialog
     ) {
     }
      
   
  alertDialog(message,state){

    let dialogRef = this.dialog.open(AlertDialogComponent, {
      height: '350px',
      width: '350px',
      data: { message:message  }
   });
  dialogRef.afterClosed().subscribe(result => {
     this.router.navigate([state])
    });
  }
    CreateUser(data): Observable < any > {
       // Class.accountManagementId = this.User.accountId;
      // Class.orgId = this.User.orgId;
    //   data.createDate = this.datepipe.transform(this.userdate, 'yyyy-MM-dd HH:mm:ss');
      //alert(this.auth.tokenHeader);
      return this._http.post(this.BASE_URL + this.CREATE_USER, data)
        .map(res => < any > res.json())
        .catch(this.handleError);
    }
    
    
  
  
  
    // Handle Api Errors
    private handleError(error: Response) {
      console.log(error);
      alert('Some error check inputs and try again.');
      return Observable.throw(error);
    }
  }
  