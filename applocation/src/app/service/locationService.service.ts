import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../module/location';


@Injectable({
    providedIn: 'root'
})

export class locationService {

    url: string = "http://localhost:8080/location/";

    constructor(private httpClient: HttpClient) {
    }

    public List(): Observable<Location[]> {

        return this.httpClient.get<Location[]>(this.url + "list");

    }

    public Crear(l: Location): Observable<any> {
        return this.httpClient.post<any>(this.url + "createLocation", l);
    }

    public Updt(id: number, l: Location): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizarLocation/${id}`, l);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `deleteLocation/${id}`);
    }


}