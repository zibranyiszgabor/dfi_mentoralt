import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule, Form } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { JobPostRequestService } from 'services/job-post-request.service';
import { BaseService } from 'services/baseService';
import { Dictionary } from 'models/dictionary.model';
import { Observable } from 'rxjs';
import { GroupedDictionaries } from 'models/groupedDictionaries';


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
  lang: string = "hu";
  private _requiredField: string  | undefined;

  hoursWorkedPerWeekId = 174;
  daysWorkedPerWeekId = 175;
  employmentDurationDateId = 83;
  employmentDurationInDaysId = 84;
  employmentDurationInWeeksId = 85;
  employmentDurationInMonthsId = 86;
  additionalBenefitOtherId = 209;


  constructor(private fb: FormBuilder, private http: HttpClient, private handler: HttpBackend, private route: ActivatedRoute, private jobPostRequestService: JobPostRequestService, private baseService: BaseService) {
    this.httpBackend = new HttpClient(handler);
    // Előfizetés az Observable-re
    
  }

  
  public get requiredField() : string | undefined {
    return this._requiredField;
  }
  
  
  public get groupedDictionary() : GroupedDictionaries {
    return this.baseService.groupedDictionary;
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
    this._requiredField = this.getParentNameByDictCode("RequiredField");
    
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
      value: ['', Validators.required]
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


  public getParentName(dictionaryId: number): string | null {
    return this.baseService.getParentName(dictionaryId, this.lang);
  }

  public getParentNameByDictCode(dictionaryCode: string): string | undefined {
    return this.baseService.getParentNameByDictCode(dictionaryCode, this.lang);
  }

  public getChildsName(dictionaryCode: string): Dictionary[] {
    return this.baseService.getChildsName(dictionaryCode);
  }

  public getChildDictionaryIdByChildDictionaryCode(childDictionaryCode: string): number | undefined {
    return this.baseService.getChildDictionaryIdByChildDictionaryCode(childDictionaryCode);
  }


  switchLanguage(): void {
    this.lang = this.lang === 'hu' ? 'en' : 'hu';
  }

}
