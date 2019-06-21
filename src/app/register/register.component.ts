import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Consult } from './consult';
//import swal from 'sweetalert';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  consult;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("register.component.ngOnInit");    
    this.consult = new Consult();
  }

  onSubmit(form){
    console.log("Submitting register...");
    try {
      var res = this.apiService.postConsult(this.consult).subscribe(
        (val) => {
          console.log("POST call successful value returned in body", 
          val);
          this.consult = new Consult();
        },
        error => { 
          const { error: err } = error;          
          console.error(err);
          if (err.indexOf("validStartBeforeFinish") > 0){
            alert("A Data/hora de início tem que ser maior que a Data/Hora de Término!");
          }
          else if (err.indexOf("validRange") > 0){
            alert("Verifique a agenda, pois já existe uma consulta marcada dentro deste horário!");
          }          
          else {
            alert("Não foi possível registrar a consulta! Solicite ajuda ao suporte.");
          }
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );            
    }
    catch (error){      
      //swal(error);
    }
    finally {
      console.log("Finalization...");
    }
  }
}
