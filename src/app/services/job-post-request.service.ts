import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CompanyInfo } from 'models/company-info.model';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class JobPostRequestService {
  private httpBackend: HttpClient;
  private url: string = "";
  companyInfo: CompanyInfo =  new CompanyInfo();


  constructor(private handler: HttpBackend) {
    this.httpBackend = new HttpClient(handler);
  }



  public fetchCompanyData(firmcode: string, form: FormGroup): void {
    this.httpBackend.get<CompanyInfo>(`https://127.0.0.1:3000/api/company-info?firmcode=${firmcode}`)
      .subscribe({
        next: (data: CompanyInfo) => {
          form.patchValue({
            firmId: data.firmId,
            firmCode: data.firmCode,
            firmName: data.firmName,
            emailAddress: data.emailAddress,
          });
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  public saveFormData(form: FormGroup): void {
    if (form.valid) {
      this.httpBackend.post('https://127.0.0.1:3000/api/job-post-request', form.value)
        .subscribe({
          next: (response) => {
            console.log('Form submitted successfully', response);
          },
          error: (error) => {
            console.error('Error submitting form', error);
          }
        });
    }

  }


  public genData():void{
    this.url = environment.apiBaseUrl + "/api/job-post-request2";
    console.log(this.url);
      this.httpBackend.get(this.url).subscribe({
        next: (data) => {
            console.log(data);
        }, error: (error) => {
          console.log(error);
        }
    })
  }


}


