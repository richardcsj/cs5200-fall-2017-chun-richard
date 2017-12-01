import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class AttachmentService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createAttachment(propertyId:string, attachment:any){
  	attachment.customer = customerId;
  	attachment.property = propertyId;
  	return this._http.post(this.baseUrl + '/api/attachment',{attachment:attachment})
  	 .map(
  	 	(res:Response) => {
  	 		const data = res.json();
  	 		return data;
  	 	}
  	 	);
  }

  findAttachmentsForProperty(propertyId:string){
  	return this._http.get(this.baseUrl + '/api/attachment/property/'+propertyId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findAllAttachments(){
  	return this._http.get(this.baseUrl + '/api/attachment')
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }
  findAttachmentById(attachmentId:string){
  	return this._http.get(this.baseUrl + '/api/attachment/'+attachmentId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updateAttachment(attachmentId:string,attachment:any){
  	return this._http.put(this.baseUrl + '/api/attachment/'+attachmentId,{attachment:attachment})
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deleteAttachment(attachmentId:string){
  	return this._http.delete(this.baseUrl + '/api/attachment/'+attachmentId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}
