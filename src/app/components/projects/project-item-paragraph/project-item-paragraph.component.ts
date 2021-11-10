import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IProject, ProjectContentItem_Text } from 'src/app/interfaces/IProject';
import { FormatUtil } from 'src/app/utils/format.util';
import { ProjectItemBase } from '../project-item-base.component';
import { ProjectItemTextComponent } from '../project-item-text/project-item-text.component';

@Component({
  selector: 'app-project-item-paragraph',
  templateUrl: './project-item-paragraph.component.html',
  styleUrls: ['./project-item-paragraph.component.scss']
})
export class ProjectItemParagraphComponent implements ProjectItemBase, AfterViewInit {

  @ViewChild('viewContainer') textElement: ProjectItemTextComponent;

  public project: IProject;

  @Input() text: ProjectContentItem_Text;
  public set header(value: string) {
    this._header = this.sanitiser.bypassSecurityTrustHtml(FormatUtil.parse(value));
  };

  _header: SafeHtml;

  constructor(
    private sanitiser: DomSanitizer
  ) { }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.textElement.text = this.text.props['text']);
  }

}
