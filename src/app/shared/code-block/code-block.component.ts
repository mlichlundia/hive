import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [
    Highlight
  ],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlockComponent {
  @Input() code!: string;
}
