import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateDialogComponent implements OnInit {

  isLoading = false
  formGroup = new FormGroup({
    rating: new FormControl(0, [Validators.required]),
    agreement: new FormControl({value: true, disabled: true}, [Validators.required]),
    description: new FormControl('', [Validators.maxLength(250)])
  });

  constructor() {

  }

  ngOnInit(): void {
  }

}
