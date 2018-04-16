import { Component } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from './core/services/translation-loader.service';

import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavigationModel } from './navigation/navigation.model';
import {LoginFuseNavigationModel} from './navigation/LoginNavigation';
import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/tr';
import { NavigationStart, Router , NavigationEnd} from '@angular/router';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        private translate: TranslateService,
        private translationLoader: FuseTranslationLoaderService,
        private router: Router    )
    {
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Use a language
        this.translate.use('en');

        // Set the navigation model
         router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                     if(window.location.pathname == '/auth/login' || window.location.pathname == '/auth/register'){
                        this.fuseNavigationService.setNavigationModel(new LoginFuseNavigationModel());
                        this.translationLoader.loadTranslations(navigationEnglish, navigationTurkish);
                    }else{
                        this.fuseNavigationService.setNavigationModel(new FuseNavigationModel());
                        this.translationLoader.loadTranslations(navigationEnglish, navigationTurkish);

                    }
                }
            }
        );
        this.fuseNavigationService.setNavigationModel(new FuseNavigationModel());
        this.translationLoader.loadTranslations(navigationEnglish, navigationTurkish);

        // Set the navigation translations
    }
}
