import { Component, OnInit } from '@angular/core'

import { EnvironmentService } from '@services/environment.service'
import { LanguageService } from '@services/language.service'

import { Certification } from '@models/certifications'
import { Exam } from '@models/exam'
import { Award } from '@models/award'

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certification: Certification
  private keys = {
    title: 'Certifications.Title',
    certsTitle: 'Certifications.CertsTitle',
    examsTitle: 'Certifications.ExamsTitle',
    awardsTitle: 'Certifications.AwardsTitle',
    thirdPlace: 'Common.Abbreviations.Numbers.Third'
  }

  constructor(
    private envService: EnvironmentService,
    private langService: LanguageService) { }

  ngOnInit() {
    this.certification = {
      exams: [
        Exam.create('http://www.mycertprofile.com/Profile/8786735631/86/2690', this.envService.images('icon-ms.png'), 'MCSA - Microsoft® Certified Solutions Associate: Web Applications', 'G344-8436'),
        Exam.create('http://www.mycertprofile.com/Profile/8786735631/12/1519', this.envService.images('icon-ms.png'), 'MCP - Microsoft® Certified Professional', 'F599-4871'),
        Exam.create('https://www.efset.org/cert/PvdiWh', this.envService.images('icon-efset.png'), 'EF SET English Certificate 76/100 (C2 Proficient)', null),
        Exam.create('https://www.scrum.org/user/343801', this.envService.images('icon-psm.png'), 'Professional Scrum Master I', null)
      ],
      courses: [
        'Professional Scrum Master™ by Scrum.org',
        'ASP.NET Core + Angular 2',
        'ASP.NET MVC 5 - Enterprise Applications',
        'Modern Apps and Architectures. (MVC5, DDD, EF6, IoC, Domain Events)'
      ],
      awards: [
        Award.create('https://www.youtube.com/watch?v=3W-3YDWmKYg', '3rd Place - Digital Transformation Labs - Microsoft/Netshoes - 2018')
      ]
    } as Certification
    this.translate()
    this.langService.onReload.subscribe(this.translate.bind(this))
  }

  translate(): void {
    this.langService.translate.get([this.keys.title, this.keys.certsTitle, this.keys.examsTitle, this.keys.awardsTitle])
      .subscribe(val => {
        this.certification.title = val[this.keys.title]
        this.certification.certsTitle = val[this.keys.certsTitle]
        this.certification.examsTitle = val[this.keys.examsTitle]
        this.certification.awardsTitle = val[this.keys.awardsTitle]
      })
  }
}
