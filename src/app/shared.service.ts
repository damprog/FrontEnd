import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  // readonly APIUrl = "https://polar-island-77389.herokuapp.com";
  // readonly PhotoUrl = "https://polar-island-77389.herokuapp.com/media/";

  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  currentPackage:any;
  currentUserId:any=1;


  constructor(private http:HttpClient) { }

  setCurrentPackage(item:any){
    this.currentPackage=item;
  }

  getCurrentPackage(){
    return this.currentPackage;
  }

  // Feedback
  getFeedbackList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/feedback/');
  }

  addFeedback(val:any){
    return this.http.post(this.APIUrl+ '/feedback/', val);
  }

  updateFeedback(val:any){
    return this.http.put(this.APIUrl+ '/feedback/', val);
  }

  deleteFeedback(val:any){
    return this.http.delete(this.APIUrl+ '/feedback/'+ val);
  }


// Users
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/user/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+ '/user/', val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+ '/user/', val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+ '/user/'+ val);
  }


// Recipes
  getRecipeList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/recipe/');
  }

  addRecipe(val:any){
    return this.http.post(this.APIUrl+ '/recipe/', val);
  }

  updateRecipe(val:any){
    return this.http.put(this.APIUrl+ '/recipe/', val);
  }

  deleteRecipe(val:any){
    return this.http.delete(this.APIUrl+ '/recipe/'+ val);
  }


// Packages
  getPackageList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/package/');
  }

  addPackage(val:any){
    return this.http.post(this.APIUrl+ '/package/', val);
  }

  updatePackage(val:any){
    return this.http.put(this.APIUrl+ '/package/', val);
  }

  deletePackage(val:any){
    return this.http.delete(this.APIUrl+ '/package/'+ val);
  }


  // Save Photo
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  

}
