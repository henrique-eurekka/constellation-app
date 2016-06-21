import {Component, ViewChild} from '@angular/core';
import {App, ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CapaPage} from './pages/capa/capa';
import {ListPage} from './pages/list/list';
import {EstrelasData} from './providers/estrelas';

@Component({
  templateUrl: 'build/app.html',
  providers: [
    EstrelasData
  ]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CapaPage;
  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: CapaPage },
      { title: 'Configuracoes', component: ListPage },
      { title: 'Fui-lá-e-fiz', component: CapaPage },
      { title: 'Radiante', component: CapaPage },
      { title: 'Não Esquenta', component: CapaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
