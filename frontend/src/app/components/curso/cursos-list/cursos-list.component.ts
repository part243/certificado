import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InscribeteComponent } from '../../inscribete/inscribete.component';
import { CursoService } from '../../../services/curso.service';
import { Curso } from '../../models/Cerificado';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { InscripcionService } from 'src/app/services/inscripcion.service';
declare var $: any;

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
  cursos: any = [];
  closeResult = '';
  CursoRegistro = '';
  Message= '';
  MessageInscripcion= '';
  

  datos = {
    id_findcedula:'',
    id_dparticipante: '',
    nombres_dparticipante:'',
    apellidos__dparticipante:'',
    telefono_dparticipante: '',
    email_dparticipante:'',
    id_curso:''
  };

  constructor(private curso: CursoService,
              private modalService: NgbModal,
              private ins: InscripcionService
    ) { }

  ngOnInit(): void {
    this.curso.getCursos().subscribe(
      res => {this.cursos = res},
      err => console.error(err)
    );

      /** efecto jquery para las cards */
    $(document).ready(function(){
      var zindex = 10;
      
      $("div.card").click(function(e){
        e.preventDefault();
        console.log('click');
        var isShowing = false;
    
        if ($(this).hasClass("show")) {
          isShowing = true
        }
    
        if ($("div.cards").hasClass("showing")) {
          // a card is already in view
          $("div.card.show")
            .removeClass("show");
    
          if (isShowing) {
            // this card was showing - reset the grid
            $("div.cards")
              .removeClass("showing");
          } else {
            // this card isn't showing - get in with it
            $(this)
              .css({zIndex: zindex})
              .addClass("show");
    
          }
    
          zindex++;
    
        } else {
          // no cards in view
          $("div.cards")
            .addClass("showing");
          $(this)
            .css({zIndex:zindex})
            .addClass("show");
    
          zindex++;
        }
        
      });
    });
    
  }

  open(content,idCurso,index) {
    this.MessageInscripcion = '';
    this.datos.id_curso= idCurso;
    this.CursoRegistro = this.cursos[index].Nombre_curso;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // llamar funcion guardar
      console.log(this.datos);
      if(this.validarForm()){
        this.ins.saveInscripcion(this.datos).subscribe(
          res=>{
            this.ins.saveInscripcionPArticipante({cedula_participante:this.datos.id_dparticipante, id_curso:this.datos.id_curso}).subscribe(
              res => this.MessageInscripcion = 'Inscrito en curso ' + this.cursos[index].Nombre_curso
            );
 

          },
          err =>console.error(err)
        );
      }else{
        this.Message = 'Todos los datos son requeridos.';
        this.open(content,idCurso,index);
       }
 
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private validarForm(): boolean{
    let valido: boolean = false;
    if(this.datos.apellidos__dparticipante != ''){
      if(this.datos.email_dparticipante != ''){
        if(Number(this.datos.id_curso) >= 0){
          if (this.datos.id_dparticipante!= ''){
            if (this.datos.nombres_dparticipante!= ''){
              if(this.datos.telefono_dparticipante != ''){
                return true;
              }
            } 
          }
        }
      }
    }
    return false;
  }
}
