import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CompanyInfo } from 'models/company-info.model';
import { FormGroup } from '@angular/forms';


interface ApiResponse {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobPostRequestService {
  private httpBackend: HttpClient;
  private url: string = "";
  companyInfo: CompanyInfo =  new CompanyInfo();
  private apiBaseUrl = environment.apiBaseUrl; 


  constructor(private handler: HttpBackend) {
    this.httpBackend = new HttpClient(handler);
  }



  public fetchCompanyData(firmcode: string, form: FormGroup): void {
    this.httpBackend.get<CompanyInfo>(`${this.apiBaseUrl}/api/company-info?firmcode=${firmcode}`)
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
      this.httpBackend.post<ApiResponse>(`${this.apiBaseUrl}/api/job-post-request`, form.value)
        .subscribe({
          next: (response: ApiResponse) => {
            const status = response?.status ?? 'Unknown';
            const message = response?.message ?? 'No message received';
            alert(`Form saved!\nStatus: ${response.status}\nMessage: ${response.message}`);
          },
          error: (error) => {
            console.error('Error submitting form', error);
            alert("Error save form data! " + error);
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


