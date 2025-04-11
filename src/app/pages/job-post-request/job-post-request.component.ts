import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';

interface CompanyInfo {
  firmId: string;
  uniqueCode: string;
  firmName: string;
  emailAddress: string;
}


@Component({
  selector: 'app-job-post-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './job-post-request.component.html',
  styleUrl: './job-post-request.component.css'
})



export class JobPostRequestComponent {
  private httpBackend: HttpClient;
  errorMessage: string = '';

  jobPostRequest = new FormGroup({
    firmId: new FormControl(''),
    uniqueCode: new FormControl(''),
    emailAddress: new FormControl(''),
    firmName: new FormControl(''),
    positionName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    jobAppDeadline: new FormControl('', Validators.required),
    expectedNumberOfApplicants: new FormControl('', Validators.required),
    specialityCategory: new FormControl('', Validators.required),
    workLocation: new FormControl('',[Validators.required, Validators.maxLength(255)]),
    workLanguage: new FormControl('', Validators.required),
    workingType: new FormControl('', Validators.required),
    workingHoursWeekdays: new FormControl('', Validators.required),
    workingHoursWeekHours: new FormControl('', Validators.required),
    typeOfCompensation: new FormControl('', Validators.required),
    compensationValue: new FormControl('', Validators.required),
    otherBenefit: new FormControl('', Validators.required),
    otherBenefitOther: new FormControl('', Validators.required),
    otherInformation: new FormControl('', Validators.required),
    plannedStartOfEmployment: new FormControl('', Validators.required),
    natureOfEmployment: new FormControl('', Validators.required),
    workSchedule: new FormControl('', Validators.required),
    typeOfEmploymentDuration: new FormControl('', Validators.required),
    workOrder: new FormControl('', Validators.required),
    employmentDurationDay: new FormControl('', Validators.required),
    employmentDurationWeek: new FormControl('', Validators.required),
    employmentDurationMonth: new FormControl('', Validators.required),
    startOfEmployment: new FormControl('', Validators.required),
    endOfEmployment: new FormControl('', Validators.required),

    
    
    //tárolók
    tasks: new FormArray([]),
    hardSkillReqs: new FormArray([]),
    softSkills: new FormArray([]),
    hardSkillAdvs: new FormArray([]),

  });

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private handler: HttpBackend) 
  {
    this.httpBackend = new HttpClient(handler);
  }

    workLanguages = ['Magyar', 'Angol', 'Német', 'spanyol', 'francia', 'olasz', 'orosz', 'japán'];
    workSchedules = ["iskolaszövetkezeten keresztül", "megbízási szerződéssel", "munkaszerződéssel", "egyszerűsített bejelentéssel"];
    typeOfEmploymentDurations = ["dátum", "nap", "hét", "hónap", "határozatlan"];
    workingTypes = ["home office", "rugalmas", "heti óraszám", "heti napszám"];
    typeOfCompensations = ["bruttó óradíj forintban", "bruttó napidíj forintban", "bruttó havidíj forintban"];
    otherBenefits = ["cafateria", "céges eszközök", "home office", "teljesítmény alapon plusz egyösszegű ösztönző", "vállalati kedvezmény", "dolgozói élet-és balesetbiztosítás", "egészségügyi csomag", "képzési lehetőségek", "munkábajárási támogatás", "egyéb"];
    specialityCategories = ["Adminisztráció, Asszisztens, Irodai munka", "Bank, Biztosítás, Bróker", "Cégvezetés, Menedzsment", "Egészségügy, Gyógyszeripar", "Építőipar, Ingatlan", "Értékesítés, Kereskedelem", "Fizikai, Segéd, Betanított munka", "Gyártás, Termelés", "HR, Munkaügy", "IT programozás, Fejlesztés", "IT üzemeltetés, Telekommunikáció", "Jog, Jogi tanácsadás", "Közigazgatás", "Marketing, Média, PR", "Mérnök", "Mezőgazdaság, Környezet", "Oktatás, Tudomány, Sport", "Pénzügy, Könyvelés", "Szakmunka", "Szállítás, Beszerzés, Logisztika", "Ügyfélszolgálat, Vevőszolgálat", "Üzleti támogató központok", "Vendéglátás, Hotel, Idegenforgalom"];
    workLocations = ["Bács-Kiskun vármegye", "Baranya vármegye", "Békés vármegye", "Békéscsaba", "Borsod-Abaúj-Zemplén vármegye", "Budapest", "Budapest, I.kerület", "Budapest, II.kerület", "Budapest, III.kerület", "Budapest, IV.kerület", "Budapest, V.kerület", "Budapest, VI.kerület", "Budapest, VII.kerület", "Budapest, VIII.kerület", "Budapest, IX.kerület", "Budapest, X.kerület", "Budapest, XI.kerület", "Budapest, XII.kerület", "Budapest, XIII.kerület", "Budapest, XIV.kerület", "Budapest, XV.kerület", "Budapest, XVI.kerület", "Budapest, XVII.kerület", "Budapest, XVIII.kerület", "Budapest, XIX.kerület", "Budapest, XX.kerület", "Budapest, XXI.kerület", "Budapest, XXII.kerület", "Budapest, XXIII.kerület", "Csongrád-Csanád vármegye", "Debrecen", "Eger", "Fejér vármegye", "Győr", "Győr-Moson-Sopron vármegye", "Hajdú-Bihar vármegye", "Heves vármegye", "Jász-Nagykun-Szolnok vármegye", "Kaposvár", "Kecskemét", "Komárom-Esztergom vármegye", "Miskolc", "Nógrád vármegye", "Nyíregyháza", "Pécs", "Pest vármegye", "Buda környéke (agglomeráció)", "Pest környéke (agglomeráció)", "Salgótarján", "Somogy vármegye", "Szabolcs-Szatmár-Bereg vármegye", "Szeged", "Székesfehérvár", "Szekszárd", "Szolnok", "Szombathely", "Tatabánya", "Tolna vármegye", "Vas vármegye", "Veszprém", "Veszprém vármegye", "Zala vármegye", "Zalaegerszeg"];
    natureOfEmployments = ["helyhez kötött", "home office", "irodán kívüli", "változó helyszín", "utazással járó"];
    workOrders = ["részmunkaidő", "teljes munkaidő"];

  ngOnInit() {

    // Query paraméterek olvasása
    this.route.queryParams.subscribe(params => {
      const uniqueCode = params['uniquecode'];
      if (uniqueCode) {
        this.fetchCompanyData(uniqueCode);
      }
    });
    this.addControl(this.tasks, this.defaultValidator);
    // this.addControl(this.hardSkillReqs, this.defaultValidator);
    // this.addControl(this.softSkills, this.defaultValidator);
    // this.addControl(this.hardSkillAdvs, this.hardSkillValidator);

  }


//Task Dinamikus kontrol--------

createControl(validators: Validators[]): FormGroup {
  return this.fb.group({
    control: ['', validators] 
  });
}

addControl(formArray: FormArray, validators: Validators[]): void {
  formArray.push(this.createControl(validators));
}

removeControl(formArray: FormArray, index: number): void {
  formArray.removeAt(index);
}



//Getterek---------------
  get tasks(): FormArray {
    return this.jobPostRequest.get('tasks') as FormArray;
  }

  get hardSkillReqs(): FormArray {
    return this.jobPostRequest.get('hardSkillReqs') as FormArray;
  }

  get softSkills(): FormArray {
    return this.jobPostRequest.get('softSkills') as FormArray;
  }

  get hardSkillAdvs(): FormArray {
    return this.jobPostRequest.get('hardSkillAdvs') as FormArray;
  }

 
  //validator getterek
  get defaultValidator(): Validators[] {
    return [Validators.required, Validators.maxLength(255)]
  }
  get hardSkillValidator(): Validators[] {
    return [Validators.maxLength(255)]
  }


  fetchCompanyData(uniquecode: BigInteger): void {
    this.errorMessage = ''; // Hibaüzenet törlése új kérés előtt
    
    this.httpBackend.get<CompanyInfo>(`https://127.0.0.1:3000/api/company-info?uniquecode=${uniquecode}`)
    .subscribe({
      next: (data: CompanyInfo) => {
        this.jobPostRequest.patchValue({
          firmId: data.firmId,
          uniqueCode: data.uniqueCode || "asd",
          firmName: data.firmName,
          emailAddress: data.emailAddress,
        });
      },
      error: (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Váratlan hiba történt a cégadatok lekérdezésekor.';
        }
        console.error(this.errorMessage);
      }
    });
  }
//-----------------------------

  onSubmit() {
    if (this.jobPostRequest.valid) {
      console.log('Form Values:', this.jobPostRequest.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
