import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule, Form } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { JobPostRequestService } from 'services/job-post-request.service';
import { BaseService } from 'services/baseService';
import { Dictionary } from 'models/dictionary.model';
import { Observable } from 'rxjs';

interface GroupedDictionaries {
  [key: string]: Dictionary[]; // key lehet 'root' vagy egy szám (parentDictId)
}


@Component({
  selector: 'app-job-post-request',
  templateUrl: './job-post-request.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./job-post-request.component.css'],
  standalone: true
})
export class JobPostRequestComponent {
  httpBackend: HttpClient;
  form: FormGroup = new FormGroup([]);
  dictionaries$: Observable<Dictionary[]>; // <--- EZ A SOR KELL!$
  groupedDictionaries: GroupedDictionaries = {}; // Most már biztosítva van a típus

  sectors = ["Adatmenedzsment (adatgyűjtés és -elemzés)", "Adminisztráció, asszisztensi feladatok", "Adózás", "Számvitel, könyvelés", "Pénzügy", "Bank, pénzintézet", "Biztosítás", "Beszerzés", "Értékesítés", "Fizikai, betanított munka", "Gazdasági elemzés és tanácsadás", "Gazdaságpszichológia", "Szervezetszichológia", "Gyártás, termelés", "HR", "Munkaügy és adminisztráció", "Bérszámfejtés és TB ügyintézés", "Innováció, kutatás, fejlesztés", "Gazdasági, üzleti IT", "IT üzemeltetés és support", "IT fejlesztés", "Jog", "Közigazgatás", "Kreatív és Design", "Kereskedelem", "E-kereskedelem", "Digitális marketing", "Marketing", "Média", "Kommunikáció", "PR", "Nemzetközi kapcsolatok, külgazdaság", "Oktatás", "Logisztika", "Projektmenedzsment", "Turizmus", "Sport és rekreáció", "Vendéglátás", "Ügyfélszolgálat"];
  natureOfWorks = ["szellemi munka", "könnyű fizikai munka", "nehéz fizikai munka", "nyári munka", "gyakornok / demonstrátor", "szakmai gyakorlat", "önkéntes munka", "délutáni munka", "éjszakai munka", "hétvégi munka", "otthon végezhető", "utazással járó"];
  placeOfWorks = ["Bács-Kiskun vármegye", "Baranya vármegye", "Békés vármegye", "Békéscsaba", "Borsod-Abaúj-Zemplén vármegye", "Budapest", "Budapest, I.kerület", "Budapest, II.kerület", "Budapest, III.kerület", "Budapest, IV.kerület", "Budapest, V.kerület", "Budapest, VI.kerület", "Budapest, VII.kerület", "Budapest, VIII.kerület", "Budapest, IX.kerület", "Budapest, X.kerület", "Budapest, XI.kerület", "Budapest, XII.kerület", "Budapest, XIII.kerület", "Budapest, XIV.kerület", "Budapest, XV.kerület", "Budapest, XVI.kerület", "Budapest, XVII.kerület", "Budapest, XVIII.kerület", "Budapest, XIX.kerület", "Budapest, XX.kerület", "Budapest, XXI.kerület", "Budapest, XXII.kerület", "Budapest, XXIII.kerület", "Csongrád-Csanád vármegye", "Debrecen", "Eger", "Fejér vármegye", "Győr", "Győr-Moson-Sopron vármegye", "Hajdú-Bihar vármegye", "Heves vármegye", "Jász-Nagykun-Szolnok vármegye", "Kaposvár", "Kecskemét", "Komárom-Esztergom vármegye", "Miskolc", "Nógrád vármegye", "Nyíregyháza", "Pécs", "Pest vármegye", "Buda környéke (agglomeráció)", "Pest környéke (agglomeráció)", "Salgótarján", "Somogy vármegye", "Szabolcs-Szatmár-Bereg vármegye", "Szeged", "Székesfehérvár", "Szekszárd", "Szolnok", "Szombathely", "Tatabánya", "Tolna vármegye", "Vas vármegye", "Veszprém", "Veszprém vármegye", "Zala vármegye", "Zalaegerszeg"];
  timeOfWorks = ["home office", "rugalmas", "heti óraszám", "heti napszám"];
  languageOfWorks = ['Magyar', 'Angol'];
  employmentTypes = ["hosszú távú munka - határozott időtartam", "hosszú távú munka - határozatlan időtartam", "alkalmi munka"];
  employmentForms = ["iskolaszövetkezeten keresztül", "megbízási szerződéssel", "munkaszerződéssel", "vállalkozói igazolvánnyal", "egyszerűsített bejelentéssel"];
  employmentDurationTypes = ["dátum", "nap", "hét", "hónap"];
  compensationTypes = ["bruttó óradíj forintban", "bruttó napidíj forintban", "bruttó havidíj forintban"];
  additionalBenefits = ["cafeteria", "céges eszközök", "home office", "teljesítmény alapon plusz egyösszegű ösztönző", "műszakpótlék", "vállalati kedvezmény", "dolgozói élet- és balesetbiztosítás", "egészségügyi csomag", "képzési paletta", "munkábajárási támogatás", "egyéb"];
  langs = ["angol", "német", "spanyol", "francia", "olasz", "portugál", "japán", "orosz"]
  langLevels = ["Alapfok", "Középfok", "Felsőfok"]
  langTypes = ["Szóbeli", "Írásbeli", "Komplex", "Nyelvvizsga megszerzése folyamatban"]


  constructor(private fb: FormBuilder, private http: HttpClient, private handler: HttpBackend, private route: ActivatedRoute, private jobPostRequestService: JobPostRequestService, private baseService: BaseService) {
    this.httpBackend = new HttpClient(handler);
    this.dictionaries$ = this.baseService.langDictionaries$; // itt hozzuk létre!
    console.log(this.dictionaries$);
    this.dictionaries$.subscribe((data) => {
      this.groupedDictionaries = this.groupDataByParentId(data);
      console.log(this.groupedDictionaries);
    });
    
  }


  get tasks() {
    return this.form.get('tasks') as FormArray
  }

  get requiredQualifications() {
    return this.form.get('requiredQualifications') as FormArray
  }

  get languages() {
    return this.form.get('languages') as FormArray
  }

  get competencies() {
    return this.form.get('competencies') as FormArray
  }

  get advantages() {
    return this.form.get('advantages') as FormArray
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firmId: Number,
      firmCode: [''],
      firmName: [''],
      emailAddress: [''],
      introduction: [''],
      position: [''],
      appDeadLine: Date,
      expectedNumberOfApplicants: Number,
      selectionProcess: [''],
      selectionDeadline: Date,
      plannedStartOfEmployment: Date,
      sector: [''],
      natureOfWork: [''],
      placeOfWork: [''],
      timeOfWork: [''],
      languageOfWork: [''],
      hoursWorkedPerWeek: Number,
      daysWorkedPerWeek: Number,
      employmentType: [''],
      employmentForm: [''],
      employmentDurationType: [''],
      employmentDurationInDays: Number,
      employmentDurationInWeeks: Number,
      employmentDurationInMonths: Number,
      employmentStartDate: Date,
      employmentEndDate: Date,
      compensationType: [''],
      compensationValue: Number,
      additionalBenefit: [''],
      other: [''],

      tasks: this.fb.array([]),
      requiredQualifications: this.fb.array([]),
      languages: this.fb.array([]),
      competencies: this.fb.array([]),
      advantages: this.fb.array([]),
    });

    this.addInput(this.tasks);
    this.addInput(this.requiredQualifications);
    this.getFirmcodeFromURL();
    this.jobPostRequestService.fetchCompanyData(this.form.get('firmCode')?.value, this.form);
    
    //this.fetchCompanyData(this.form.get('firmCode')?.value);
  }

  getFirmcodeFromURL(): void {
    let firmcode = "";
    this.route.queryParams.subscribe(params => {
      firmcode = params['firmcode'];
    });
    this.form.patchValue({ firmCode: firmcode})
  }


  addInput(array: FormArray) {
    array.push(this.fb.group({
      input: ['', Validators.required]
    }));
  }

  addLanguages() {
    this.languages.push(this.fb.group({
      lang: ['', Validators.required],
      langLevel: ['', Validators.required],
      langType: ['', Validators.required]
    }));
  }

  removeInput(array: FormArray, index: number) {
    array.removeAt(index);
  }


  getInvalidControls() {
    const invalidControls = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalidControls.push(name);
      }
    }
    return invalidControls;
  }

  onSubmit() {
    this.jobPostRequestService.saveFormData(this.form);
  }

  private groupDataByParentId(data: Dictionary[]): GroupedDictionaries {
    return data.reduce((groups, item) => {
      const parentId = item.parentDictId ?? 'root'; // Ha nincs parentDictId, akkor root
      if (!groups[parentId]) {
        groups[parentId] = [];
      }
      groups[parentId].push(item);
      return groups;
    }, {} as GroupedDictionaries); // Explicit típus a reduce kezdetén
  }

}
