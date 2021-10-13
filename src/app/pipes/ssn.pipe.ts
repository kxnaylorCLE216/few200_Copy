import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ssnMask' })
export class SsnMaskPipe implements PipeTransform {
  transform(value?: string | null,): string {

    const normalizedSsn = value?.trim();
    if (!normalizedSsn) {
      return 'No SSN Available';
    }
    if (normalizedSsn.length === 11) {
      return '***-**-' + normalizedSsn.substr(7);
    } else {
      return '***-**-' + normalizedSsn;
    }
  }
}
