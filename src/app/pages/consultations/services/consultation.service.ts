import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../../environments/environments";
import {ConsultationResponse} from "../interfaces/consultation.interface";
import {ConsultationByIDResponse} from "../interfaces/consultation-by-id.interface";
import {ConsultationCreate} from "../interfaces/consultation-create.interface";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private readonly baseUrl = environments.testBaseUrl;
  private http = inject( HttpClient );

  constructor() { }

  getAllConsultations(): Observable<ConsultationResponse[]>{
    const url = `${ this.baseUrl }/consultations`;
    return this.http.get<ConsultationResponse[]>(url);
  }

  getConsultationById(id: string): Observable<ConsultationByIDResponse> {
    const url = `${this.baseUrl}/consultations/${id}`;
    return this.http.get<ConsultationByIDResponse>(url);
  }

  createConsultation(consultationData: ConsultationCreate): Observable<ConsultationResponse> {
    const url = `${this.baseUrl}/consultations`;
    return this.http.post<ConsultationResponse>(url, consultationData);
  }

  createReply(content: string, consultationId: string): Observable<any> {
    const url = `${this.baseUrl}/consultations/reply`;
    const body = { content, consultationId };
    return this.http.post(url, body);
  }
}
