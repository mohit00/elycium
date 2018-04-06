import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { StudentSettingComponent } from './student-setting/student-setting.component';

const routes = [
    {
        path     : 'student',
        component: StudentSettingComponent
    }
];

@NgModule({
    declarations: [
        StudentSettingComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        StudentSettingComponent
    ]
})
export class SettingModule {
}
