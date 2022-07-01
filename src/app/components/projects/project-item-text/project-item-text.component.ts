import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IProject } from 'src/app/interfaces/IProject';
import { FormatUtil } from 'src/app/utils/format.util';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-project-item-text',
	styleUrls: ['./project-item-text.component.scss'],
	templateUrl: './project-item-text.component.html'
})
export class ProjectItemTextComponent implements ProjectItemBase, OnInit {

	public project: IProject;

  @Input() set text(value: string) {
		this._text = this.sanitiser.bypassSecurityTrustHtml(FormatUtil.parse(value));
	}

  _text: SafeHtml;

  constructor(
    private sanitiser: DomSanitizer
  ) { }

  ngOnInit(): void { }
}
