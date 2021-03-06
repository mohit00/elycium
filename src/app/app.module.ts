import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { TranslateModule } from '@ngx-translate/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
  import { MatDialogModule } from '@angular/material'
const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/content/sample/sample.module#FuseSampleModule'
    } ,
    {
        path        : 'setting',
        loadChildren: './main/content/Setting/settingModule#SettingModule'
    } ,{
        path :'auth',
        loadChildren: './main/content/auth/authModule#AuthModule'
        
    },
    {
        path      : '**',
        redirectTo: 'auth/login'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        AlertDialogComponent
     ],
     entryComponents:[AlertDialogComponent],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,MatGridListModule,MatDialogModule
     ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule { }
