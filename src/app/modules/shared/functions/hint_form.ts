import { FormControl } from "@angular/forms";

interface HintValidity {
    control:FormControl;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
}

export function getHint(value: HintValidity): string | null {
    if(value.control.getError("required")) {
      return "Поле не должно быть пустым";
    } else if(value.control.getError("minlength")) {
      return `Минимальное количество символов: ${value.minLength}`;
    } else if(value.control.getError("maxlength")) {
      return `Максимальное количество символов: ${value.maxLength}`;
    } else if(value.control.getError("pattern")) {
      return value.pattern || null;
    }
    return null;
}
