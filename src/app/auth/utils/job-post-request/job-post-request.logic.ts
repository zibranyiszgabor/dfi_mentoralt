
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobPostRequestService } from 'services/job-post-request.service';


export function addControl(formArray: FormArray, validators: Validators[], fb: FormBuilder): void {
  formArray.push(fb.group({
    control: ['', validators]  // A control hozzáadása, amely érvényesítőkkel van ellátva
  }));
}

export function removeControl(formArray: FormArray, index: number): void {
  formArray.removeAt(index);  // Az index alapján eltávolítjuk az elemet
}
//-------------------

export function refreshModelData(fg: FormGroup, service: JobPostRequestService) {
  if (service.formData && service.companyInfo) {
    service.formData.firmId = service.companyInfo.firmId;
    service.formData.firmCode = service.companyInfo.firmCode;
    service.formData.emailAddress = service.companyInfo.emailAddress;
    service.formData.firmName = service.companyInfo.firmName;
    service.formData.position = fg.get("positionName")?.value;
    service.formData.jobAppDeadline = fg.get("jobAppDeadline")?.value;
    service.formData.expectedNumberOfApplicant = fg.get("expectedNumberOfApplicant")?.value;
    service.formData.specialityCategory = fg.get("specialityCategory")?.value;
    service.formData.workLocation = fg.get("workLocation")?.value;
    service.formData.workLanguage = fg.get("workLanguage")?.value;
    service.formData.workingType = fg.get("workingType")?.value;
    service.formData.workingHoursWeekDay = fg.get("workingHoursWeekDay")?.value;
    service.formData.workingHoursWeekHour = fg.get("workingHoursWeekHour")?.value;
    service.formData.typeOfCompensation = fg.get("typeOfCompensation")?.value;
    service.formData.compensationValue = fg.get("compensationValue")?.value;
    service.formData.otherBenefit = fg.get("otherBenefit")?.value;
    service.formData.otherBenefitOther = fg.get("otherBenefitOther")?.value;
    service.formData.otherInformation = fg.get("otherInformation")?.value;
    service.formData.plannedStartOfEmployment = fg.get("plannedStartOfEmployment")?.value;
    service.formData.natureOfEmployment = fg.get("natureOfEmployment")?.value;
    service.formData.workSchedule = fg.get("workSchedule")?.value;
    service.formData.workOrder = fg.get("workOrder")?.value;
    service.formData.typeOfEmploymentDuration = fg.get("typeOfEmploymentDuration")?.value;
    service.formData.employmentDurationDay = fg.get("employmentDurationDay")?.value;
    service.formData.employmentDurationWeek = fg.get("employmentDurationWeek")?.value;
    service.formData.employmentDurationMonth = fg.get("employmentDurationMonth")?.value;
    service.formData.startOfEmployment = fg.get("startOfEmployment")?.value;
    service.formData.endOfEmployment = fg.get("endOfEmployment")?.value;
    service.formData.tasks = fg.get("tasks")?.value;
    // service.formData.hardSkillReqs = fg.get("hardSkillReqs")?.value;
    // service.formData.softSkills = fg.get("softSkills")?.value;
    // service.formData.hardSkillAdvs = fg.get("hardSkillAdvs")?.value;
  }

}


export function refreshFormData(fg: FormGroup, service: JobPostRequestService) {
  if (service.formData) {
    // console.log('FormGroup before patchValue:', fg.value);
    // console.log('Service formData:', service.formData);

    fg.patchValue({
      firmId: service.formData.firmId,
      uniqueCode: service.formData.firmCode,
      emailAddress: service.formData.emailAddress,
      firmName: service.formData.firmName,
      positionName: service.formData.position,
      jobAppDeadline: service.formData.jobAppDeadline,
      expectedNumberOfApplicant: service.formData.expectedNumberOfApplicant,
      specialityCategory: service.formData.specialityCategory,
      workLocation: service.formData.workLocation,
      workLanguage: service.formData.workLanguage,
      workingType: service.formData.workingType,
      workingHoursWeekDay: service.formData.workingHoursWeekDay,
      workingHoursWeekHour: service.formData.workingHoursWeekHour,
      typeOfCompensation: service.formData.typeOfCompensation,
      compensationValue: service.formData.compensationValue,
      otherBenefit: service.formData.otherBenefit,
      otherBenefitOther: service.formData.otherBenefitOther,
      otherInformation: service.formData.otherInformation,
      plannedStartOfEmployment: service.formData.plannedStartOfEmployment,
      natureOfEmployment: service.formData.natureOfEmployment,
      workSchedule: service.formData.workSchedule,
      workOrder: service.formData.workOrder,
      typeOfEmploymentDuration: service.formData.typeOfEmploymentDuration,
      employmentDurationDay: service.formData.employmentDurationDay,
      employmentDurationWeek: service.formData.employmentDurationWeek,
      employmentDurationMonth: service.formData.employmentDurationMonth,
      startOfEmployment: service.formData.startOfEmployment,
      endOfEmployment: service.formData.endOfEmployment,
      tasks: service.formData.tasks,
      // hardSkillReqs: service.formData.hardSkillReqs,
      // hardSkillAdvs: service.formData.hardSkillAdvs,
      // softSkills: service.formData.softSkills,
    });

  } // console.log('FormGroup after patchValue:', fg.value);
  // } else {
  //   console.error('Service formData is null or undefined');
  // }
}

export function checkInvalidControls(form: FormGroup): void {
  const invalidControls = [];
  const controls = form.controls;

  for (const name in controls) {
    if (controls[name].invalid) {
      invalidControls.push(name);
    }
  }
  if (invalidControls.length > 0)
    console.log('Érvénytelen mezők:', invalidControls);
}

export function updateValidators(fg: FormGroup) {

}

export function updateEmploymentDurationValidators(formGroup: FormGroup, typeOfEmploymentDurations: string[]): void {
  const selector = formGroup.get('typeOfEmploymentDuration')?.value;
  const day = formGroup.get('employmentDurationDay');
  const week = formGroup.get('employmentDurationWeek');
  const month = formGroup.get('employmentDurationMonth');
  const startDate = formGroup.get('startOfEmployment');
  const endDate = formGroup.get('endOfEmployment');

  switch (selector) {
    //working type select
    case (typeOfEmploymentDurations[0])://dátum
      {
        day?.setValidators([]);
        week?.setValidators([]);
        month?.setValidators([]);
        startDate?.setValidators([Validators.required]);
        endDate?.setValidators([Validators.required]);
        break;
      }
    case (typeOfEmploymentDurations[1])://nap
      {
        day?.setValidators([Validators.required]);
        week?.setValidators([]);
        month?.setValidators([]);
        startDate?.setValidators([]);
        endDate?.setValidators([]);
        break;
      }
    case (typeOfEmploymentDurations[2])://hét
      {
        day?.setValidators([]);
        week?.setValidators([Validators.required]);
        month?.setValidators([]);
        startDate?.setValidators([]);
        endDate?.setValidators([]);
        break;
      }
    case (typeOfEmploymentDurations[3])://hónap
      {
        day?.setValidators([]);
        week?.setValidators([]);
        month?.setValidators([Validators.required]);
        startDate?.setValidators([]);
        endDate?.setValidators([]);
        break;
      }
    default: {//egyik sem
      day?.setValidators([]);
      week?.setValidators([]);
      month?.setValidators([]);
      startDate?.setValidators([]);
      endDate?.setValidators([]);
      break;
    }
  };
  // Frissítse a validátorokat
  day?.updateValueAndValidity();
  week?.updateValueAndValidity();
  month?.updateValueAndValidity();
  startDate?.updateValueAndValidity();
  endDate?.updateValueAndValidity();
}

export function setControlValue(control: FormControl, value: object) {
  control.patchValue(value)
}


export function logInvalidControls(formGroup: FormGroup) {
  const invalidControls = [];
  const controls = formGroup.controls;
  for (const name in controls) {
    if (controls[name].invalid) {
      invalidControls.push(name);
    }
  }
  console.log('Invalid controls:', invalidControls);
}
