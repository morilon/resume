import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpLoaderFactory } from './shared/functions/http-loader-factory'

import { AppComponent } from './app.component'

import { SharedModule } from './shared/shared.module'
import { SectionsModule } from './sections/sections.module'
import { CoreModule } from './core/core.module'

const routes: Routes = [
  { path: '**', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, { useHash: false }),
    SectionsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
