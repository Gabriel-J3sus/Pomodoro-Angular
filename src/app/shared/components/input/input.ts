import {
  Component,
  forwardRef,
  input,
  model,
  signal,
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { Settings } from '@core/config';

import { ActionIcon } from '../action-icon/action-icon';
import { IconName } from '@ng-icons/core';


// Represents one optional action button displayed
// on either side of the input.
type InputButton = {
  icon: IconName;
  action: () => void;
}

type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';
type InputProps = {
  autocomplete?: string;
  name?: string;
  required?: boolean;
  readonly?: boolean;
  minlength?: number;
  maxlength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  pattern?: string;
  inputmode?: HTMLInputElement['inputMode'];
};


@Component({
  selector: 'app-input',

  imports: [
    ActionIcon,
  ],

  templateUrl: './input.html',

  /*
   * Makes our custom component compatible with
   * Angular Reactive Forms / Template-driven Forms.
   */
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true,
    },
  ],
})
export class Input implements ControlValueAccessor {

  protected iconSizeMap = Settings.iconSizeMap;

  /*
   * -----------------------------
   * Input configuration
   * -----------------------------
   */

  label = input('');
  placeholder = input('');

  type = input<InputType>('text');

  disabled = input(false);


  /*
   * Optional buttons.
   *
   * The parent decides what each button does.
   *
   * For example:
   *
   * [leftButton]="{
   *   icon: remixSearchLine,
   *   action: search
   * }"
   */
  leftButton = input<InputButton | null>();

  rightButton = input<InputButton | null>();


  /*
   * -----------------------------
   * Value
   * -----------------------------
   *
   * `model()` allows:
   *
   * <app-input [(value)]="value" />
   */
  value = model('');


  /*
   * -----------------------------
   * Focus state
   * -----------------------------
   *
   * We keep track of whether the
   * native input currently has focus.
   *
   * This allows the border and buttons
   * to use the same visual state.
   */
  protected isFocused = signal(false);


  /*
   * Angular Forms can disable the
   * component independently from
   * the `[disabled]` input.
   */
  private formDisabled = signal(false);


    /*
   * -----------------------------
   * Native input properties
   * -----------------------------
   *
   * Everything inside this object is simply forwarded
   * to the actual native <input>.
   */

  inputProps = input<InputProps>({});

  protected isDisabled(): boolean {
    return this.disabled() || this.formDisabled();
  }


  /*
   * -----------------------------
   * ControlValueAccessor
   * -----------------------------
   */

  private onChange: (value: string) => void = () => {};

  private onTouched: () => void = () => {};


  /*
   * Called by Angular Forms when
   * the FormControl value changes
   * externally.
   */
  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }


  /*
   * Angular gives us this callback
   * so we can notify the FormControl
   * whenever the user changes the value.
   */
  registerOnChange(
    fn: (value: string) => void,
  ): void {
    this.onChange = fn;
  }


  /*
   * Angular gives us this callback
   * so we can notify the FormControl
   * that the user interacted with it.
   */
  registerOnTouched(
    fn: () => void,
  ): void {
    this.onTouched = fn;
  }


  /*
   * Called when Angular Forms enables
   * or disables the control.
   */
  setDisabledState(
    isDisabled: boolean,
  ): void {
    this.formDisabled.set(isDisabled);
  }


  /*
   * -----------------------------
   * Native input events
   * -----------------------------
   */

  protected handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    const value = input.value;

    /*
     * Update the signal-based API.
     */
    this.value.set(value);

    /*
     * Update Angular Forms.
     */
    this.onChange(value);
  }


  protected handleFocus(): void {
    this.isFocused.set(true);
  }


  protected handleBlur(): void {
    this.isFocused.set(false);

    this.onTouched();
  }


  /*
   * -----------------------------
   * Button actions
   * -----------------------------
   */

  protected handleButtonClick(
    button: InputButton,
  ): void {
    /*
     * The Input component doesn't need
     * to know what the button actually does.
     *
     * It simply executes the callback
     * provided by the parent.
     */
    button.action();
  }
}