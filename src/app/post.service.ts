import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url='http://api.openweathermap.org/data/2.5/forecast?q=';
 
  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get(this.url);
    
  }
  
}
