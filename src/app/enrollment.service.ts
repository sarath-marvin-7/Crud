import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient) { }

  post(data:any){
    return this.http.post("http://localhost:3000/name",data);
  }

  get(){
    return this.http.get("http://localhost:3000/name/");
  }

  delete(id:any){
    return this.http.delete("http://localhost:3000/name/"+id); 
  }

  update(data: any){
    console.log(data.id, data);
    return this.http.put<any>("http://localhost:3000/name/"+data.id,data).pipe(map((res : any) =>{

      return res;
    }))
  }
}
