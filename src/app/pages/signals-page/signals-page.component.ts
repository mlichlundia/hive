import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { cleanUp } from './code-examples/cleanUp';
import { optimization } from './code-examples/optimization';
import { signalDependency } from './code-examples/signal-dependency';
import { BaseExampleComponent } from './base-example/base-example.component';
import { untracked_1, untracked_2 } from './code-examples/untracked';
import { EffectDependencyExampleComponent } from './effect-dependency-example/effect-dependency-example.component';

@Component({
  selector: 'app-signals-page',
  standalone: true,
  imports: [
    BaseExampleComponent,
    CodeBlockComponent,
    EffectDependencyExampleComponent
  ],
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.scss'
})
export class SignalsPageComponent {
  public readonly signalDependency = signalDependency;
  public readonly untracked_1 = untracked_1;
  public readonly untracked_2 = untracked_2;
  public readonly cleanUp = cleanUp;
  protected readonly optimization = optimization;
}
