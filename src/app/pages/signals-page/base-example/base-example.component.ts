import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit, Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-base-example',
  standalone: true,
  imports: [
    MatIconButton,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInput
  ],
  templateUrl: './base-example.component.html',
  styleUrl: './base-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseExampleComponent implements OnInit {
  public control: FormControl<number> = this.fb.control(0, { nonNullable: true });

  public result: WritableSignal<number> = signal(0);
  public doubleResult: Signal<number> = computed(() => this.result() * 2);

  private destroyRef = inject(DestroyRef);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.monitorControlChanges();
  }

  private monitorControlChanges(): void {
    this.control.valueChanges
      .pipe(
        debounceTime(400),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => this.result.set(value || 0));
  }

  public increase(): void {
    this.result.update(value => value + 1);
  }

  public decrease(): void {
    this.result.update(value => value - 1);
  }
}
