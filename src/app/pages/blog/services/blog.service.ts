import {inject, Injectable} from '@angular/core';
import {environments} from "../../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {BlogResponse} from "../interfaces/blog.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly baseUrl = environments.testBaseUrl;
  private http = inject( HttpClient );

  constructor() { }

  getAllBlogs(): Observable<BlogResponse[]>{
    const url = `${ this.baseUrl }/blog`;
    return this.http.get<BlogResponse[]>(url);
  }

  getBlogById(id: string): Observable<BlogResponse> {
    const url = `${this.baseUrl}/blog/${id}`;
    return this.http.get<BlogResponse>(url);
  }
}
