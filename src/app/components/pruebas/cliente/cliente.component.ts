import { Component, OnInit } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service'
import { Cliente } from '../../../models/Cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente(0, '', '', '', '', '', 0, 0, false, []); 
  constructor(private axiosHandlerService: AxiosHandlerService) { }

  ngOnInit(): void {
    this.axiosHandlerService.getData('http://localhost:8080/api/javeriana/grupo25/cliente/1')
      .then(response => {
        this.cliente = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
