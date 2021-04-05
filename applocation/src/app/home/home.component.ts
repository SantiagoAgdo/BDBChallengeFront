import { Component, OnInit } from '@angular/core';
import { Location } from '../module/location';
import { locationService } from '../service/locationService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nombreUbicacion: string;
  areaUbicacion: number;
  create: boolean = false;
  list: boolean = true;
  locations: Location[] = [];

  constructor(
    private l: locationService
  ) { }

  ngOnInit() {
    this.listar();
  }
  changeMenu(){
    this.create = !this.create;
    this.list = !this.list;
    this.listar();
  }

  crear() {
    if (this.nombreUbicacion == '' || this.areaUbicacion == null || this.areaUbicacion == undefined) {
      Swal.fire({
        title: 'Error!',
        text: 'Datos Incompletos',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }else{
      let l: Location = new Location(0, this.nombreUbicacion, this.areaUbicacion);
      this.l.Crear(l).subscribe(
        r => {
          Swal.fire(
            'Right!',
            'Create Success!',
            'success'
          )
        }
      )
    }
    
  }

  listar() {
    this.l.List().subscribe(
      r => {
        this.locations = r;
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    )
  }

  eliminar(id) {
      this.l.delete(id).subscribe(
        r=>{
          Swal.fire(
            'Right!',
            'Delete Success!',
            'success'
          );
          this.listar();
        },
        err => {
          Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      )
  }
}
