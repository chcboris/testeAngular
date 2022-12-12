import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Dados } from 'src/app/model/dados';

@Injectable({
    providedIn: 'root'
  })

export class Servidor {

  url = 'http://localhost:4200/api/';
  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  Teste(): Observable<void> {
      
    return this.http.get<void>(this.url + 'primitivo/processa')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getTesteNumero(): Observable<Number> {
      
    return this.http.get<Number>(this.url + 'primitivo/numero')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  testando(): String {
    
    return "testando";
  }



  // consulta registro
// lista
// pequisar 
// inserir
// excluir
// alterar

listar(): Observable<Dados[]> {
  return this.http.get<Dados[]>(this.url + 'testeAngular/lista');
}

consultar(codigo: number): Observable<Dados> {
  return this.http.get<Dados>(this.url + 'testeAngular/consulta/' + codigo);
}

alterar(dados: Dados): Observable<Dados> {
  return this.http.put<Dados>(this.url + 'testeAngular/alteracao', dados);
}

excluir(id: number): Observable<Dados> {
  return this.http.delete<Dados>(this.url + 'testeAngular/exclusao/' + id);
}

inserir(dados: Dados): Observable<Dados> {
  return this.http.post<Dados>(this.url + 'testeAngular/inclusao', dados);
}
/*




*/
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}



/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://localhost:3000/cars'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um carro pelo id
  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um carro
  saveCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.url, JSON.stringify(car), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um carro
  updateCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.url + '/' + car.id, JSON.stringify(car), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um carro
  deleteCar(car: Car) {
    return this.httpClient.delete<Car>(this.url + '/' + car.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


    getTeste(): Observable<String> {
    
    return this.http.get<String>(this.url + 'primitivo/texto')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}*/