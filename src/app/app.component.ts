import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  user: any = {
    email: 'coradowilly@gmail.com',
    password: '1234',
  };

  usuarioactivo:any;
  
  iniciarSesion():Boolean{ 
    console.log(this.user);
    if(this.user.email == 'coradowilly@gmail.com' && this.user.password == '123456'){
      this.showSuccess("Login correcto")
      return true
    } else {
      this.showError("Login Incorrecto")
      return false
    }
  }

  showError(msj:string) {
    //this.toastr.error(msj);
    alert(msj);
  }

  showSuccess(msj: string) {
    //this.toastr.success(msj);
    alert(msj);
  }

  gotoRecuperarPassword() {
    alert("Se te envio un correo con la recuperacion")
  }
}
