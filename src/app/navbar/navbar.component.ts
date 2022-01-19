import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    
    sidebarVisible: boolean = false;
    expertMode: boolean = false;
    experimental: boolean = false;
    darkMode: boolean = false;

    constructor(private router: Router) {

    }

    activateExpertMode() {
        this.expertMode = !this.expertMode;

        const extras: NavigationExtras = {
            queryParams: {
                expertmode: this.expertMode
            },
            queryParamsHandling: 'merge',
            preserveFragment: true
        };

        this.router.navigate([], extras);
    }

    activateExperimentalFeatures() {
        this.experimental = !this.experimental;

        const extras: NavigationExtras = {
            queryParams: {
                experimental: this.experimental
            },
            queryParamsHandling: 'merge',
            preserveFragment: true
        };
    }

    activateExpertModeInHash() {
        this.darkMode = !this.darkMode;

        const extras: NavigationExtras = {
            fragment: this.darkMode ? 'dark-mode' : 'light-mode',
            queryParamsHandling: 'preserve'
        };

        this.router.navigate([], extras);
    }

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
