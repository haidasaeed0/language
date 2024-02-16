import { Component } from '@angular/core';
declare var google: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  
  defaultLoader = {
    visibility: false
  }

  // constructor() {
  //   let lang = this.getCookie('googtrans');
  //   lang = lang === '/en/ar' ? 'ar' : 'en';
  // }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.googleTranslateElementInit('en');
  //   }, 500);

  //   setTimeout(() => {
  //     // select the target node
  //     var target: any = document.querySelector('html')
  //     // create an observer instance
  //     var observer = new MutationObserver((mutations) => {
  //       // this.translateDetector.init();
  //     });
  //     // configuration of the observer:
  //     var config = { attributes: true, childList: true, characterData: true };
  //     // pass in the target node, as well as the observer options
  //     observer.observe(target, config);
  //   }, 1000);


  // }

  // getCookie(name: any) {
  //   const value = `; ${document.cookie}`;
  //   const parts: any = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }

  // googleTranslateElementInit(lang: any) {
  //   this.defaultLoader = {
  //     visibility: true
  //   }
  //   new google.translate.TranslateElement({ pageLanguage: lang, includedLanguages: 'en,ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
  //   setTimeout(() => {
  //     this.defaultLoader = {
  //       visibility: false
  //     }
  //     // $('.sidenav-container.mat-drawer-container.mat-sidenav-container').css('position', 'fixed');
  //   }, 5000);

   
  // }

  // ngOnInit() {
  //   // Your other initialization logic
  
  //   // Initialize Google Translate API
  //   setTimeout(() => {
  //     this.googleTranslateElementInit('en');
  //   }, 1000); 
  // }
  

  // changeLanguage(selectedValue: any) {
  //   // Implement logic to change the language
  //   // You can call the Google Translate API or set the language in your own way
  //   console.log('Selected language:', selectedValue);

  //   // For demonstration, let's assume you want to change the language using Google Translate API
  //   this.googleTranslateElementInit(selectedValue.target.value);
  // }

  // googleTranslateElementInit(lang: string) {
  //   var select = document.getElementsByClassName('goog-te-combo'),input = document.getElementById('langChange');
  //   console.log("sel",select)
  //   try {
  //     console.log("trigger",lang)
  //     if (google && google.translate && google.translate.TranslateElement) {
  //       console.log("trigger",lang)
  //       // Your Google Translate initialization logic here
  //       new google.translate.TranslateElement({
  //         pageLanguage: lang,
  //         includedLanguages: 'ar,en,fr',
  //         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //         autoDisplay: false
  //       }, 'google_translate_element');
  //     } else {
  //       throw new Error('Google Translate API objects not available');
  //     }
  //   } catch (error) {
  //     console.error('Google Translate API initialization error:', error);
  //   }
  // }
}
