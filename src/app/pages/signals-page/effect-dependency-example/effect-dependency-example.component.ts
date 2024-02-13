import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-effect-dependency-example',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton
  ],
  templateUrl: './effect-dependency-example.component.html',
  styleUrl: './effect-dependency-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectDependencyExampleComponent {
  public count = signal(0);
  public currentCount = 0;

  public showNewCount = signal(false);

  public computedCount = computed(() => {
    if (this.showNewCount()) {
      return this.count();
    }

    return 'Recalculation...';
  });

  constructor() {
    effect((onCleanup) => {
      console.log(`Recalculation: ${this.showNewCount()}`);
      if (this.showNewCount()) this.currentCount = untracked(this.count);

      onCleanup(() => console.log('effect has cleaned up'))
    });
  }

  public increase(): void {
    this.count.update(value => value + 1);
  }

  public decrease(): void {
    this.count.update(value => value - 1);
  }

  public toggle(): void {
    this.showNewCount.update(value => !value);
  }
}
