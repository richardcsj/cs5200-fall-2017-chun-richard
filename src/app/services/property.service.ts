import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class PropertyService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createProperty(ownerId:string, property:any){
  	return this._http.post(this.baseUrl + '/api/property/owner/'+ownerId,{property:property})
  	 .map(
  	 	(res:Response) => {
  	 		const data = res.json();
  	 		return data;
  	 	}
  	 	);
  }

  findPropertiesByOwner(ownerId:string){
  	return this._http.get(this.baseUrl + '/api/property/owner/'+ownerId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findAllProperties(){
  	return this._http.get(this.baseUrl + '/api/property')
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }
  findPropertyById(propertyId:string){
  	return this._http.get(this.baseUrl + '/api/property/'+propertyId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updateProperty(propertyId:string,property:any){
  	return this._http.put(this.baseUrl + '/api/property/'+propertyId,{property:property})
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deleteProperty(propertyId:string){
  	return this._http.delete(this.baseUrl + '/api/property/'+propertyId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}
