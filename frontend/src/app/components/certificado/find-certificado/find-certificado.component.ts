import { Component, OnInit } from '@angular/core';
import { CertificadosService } from 'src/app/services/certificados.service';

@Component({
  selector: 'app-find-certificado',
  templateUrl: './find-certificado.component.html',
  styleUrls: ['./find-certificado.component.css']
})
export class FindCertificadoComponent implements OnInit {
  cip: string='';
  datos: any;
  show = 0;
  constructor(private certificate: CertificadosService) { }

  ngOnInit(): void {
  }

  findcip(){
    //console.log(this.cip);
    if (this.cip != ''){
     this.certificate.getCertificado(this.cip).subscribe(
      res =>{
        this.datos=res;
        this.show = 1;
      },
      err =>{
        this.show=0;
        console.log('sin datos');
      }
     );
    }
  }

}
