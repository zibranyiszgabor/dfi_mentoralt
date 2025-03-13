import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { dashboardRoutingModule } from '../../../app/components/dashboard/dashboard.routes';
import { filemanagerRoutingModule } from '../../components/pages/filemanager/filemanager.routes';
import { appsRoutingModule } from '../../../app/components/apps/apps.routes';
import { elementsRoutingModule } from '../../../app/components/elements/elements.routes';
import { advanceduiRoutingModule } from '../../../app/components/advancedui/advancedui.routes';
import { pagesRoutingModule } from '../../../app/components/pages/pages.route';
import { utilitiesRoutingModule } from '../../../app/components/utilities/utilities.routes';
import { chartsRoutingModule } from '../../../app/components/charts/charts.route';
import { formsRoutingModule } from '../../../app/components/Forms/forms.routes';
import { formelementsRoutingModule } from '../../../app/components/Forms/Form-Elements/form-elements.routes';
import { tablesRoutingModule } from '../../../app/components/tables/tables.route';
import { widgetsRoutingModule } from '../../../app/components/widgets/widgets.route';
import { formeditorRoutingModule } from '../../../app/components/Forms/form-editor/form-editor.routes';
import { mapRoutingModule } from '../../../app/components/map/map.route';
import { iconsRoutingModule } from '../../../app/components/icons/icons.route';


export const content: Routes = [

  { path: '', children: [
    ...dashboardRoutingModule.routes,
    ...filemanagerRoutingModule.routes,
    ...appsRoutingModule.routes,
    ...elementsRoutingModule.routes,
    ...advanceduiRoutingModule.routes,
    ...advanceduiRoutingModule.routes,
    ...pagesRoutingModule.routes,
    ...utilitiesRoutingModule.routes,
    ...chartsRoutingModule.routes,
    ...formelementsRoutingModule.routes,
    ...formsRoutingModule.routes,
    ...tablesRoutingModule.routes,
    ...widgetsRoutingModule.routes,
    ...formeditorRoutingModule.routes,
    ...mapRoutingModule.routes,
    ...iconsRoutingModule.routes
  ]}

];
@NgModule({
  imports: [RouterModule],
    // imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
