import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { componentBase } from './code-examples/component';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [
    CodeBlockComponent
  ],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPageComponent {
  public code = componentBase
}
