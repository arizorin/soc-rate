import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {RateDialogComponent} from "./components/rate-dialog/rate-dialog/rate-dialog.component";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  username = 'Arseniy Meer';
  rateValue = 3;

  isLoggedIn = false;

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(RateDialogComponent, this.injector),
    {
      dismissible: true,
      label: `Rate ${this.username}`,
    },
  );

  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
              @Inject(Injector) private readonly injector: Injector,) {
  }

  bottomButtonClick(): void {
    this.dialog.subscribe({
      next: data => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info(`Dialog closed`);
      },
    });
  }

  openRateDescriptionDialog(title: string): void {
    this.dialogService
      .open(title, {label: `Rate Details`, size: `s`})
      .subscribe();
  }
}
