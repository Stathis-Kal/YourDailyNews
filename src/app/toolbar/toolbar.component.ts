import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private library: FaIconLibrary, private themeService: ThemeService) {
    library.addIcons(faGithub, faLinkedin);
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean){
    this.themeService.setDarkTheme(checked);
  }

}
