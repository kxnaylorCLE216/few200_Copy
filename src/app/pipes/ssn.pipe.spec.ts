import { SsnMaskPipe } from "./ssn.pipe";

describe('ssnMask Pipe', () => {

  it('works with full SSNs', () => {
    const sample = '555-55-5555';
    const mask = new SsnMaskPipe();

    expect(mask.transform(sample)).toBe('***-**-5555');
  });

  it('works with partial ssns', () => {
    const sample = '5555';
    const mask = new SsnMaskPipe();

    expect(mask.transform(sample)).toBe('***-**-5555');
  });
  describe('no ssn', () => {
    it('displays message for empty string ssn', () => {
      const sample = '';
      const mask = new SsnMaskPipe();

      expect(mask.transform(sample)).toBe('No SSN Available');
    });
    it('displays message for null string ssn', () => {
      const sample = undefined;
      const mask = new SsnMaskPipe();

      expect(mask.transform(sample)).toBe('No SSN Available');
    });
    it('displays message for null string ssn', () => {
      const sample = null;
      const mask = new SsnMaskPipe();

      expect(mask.transform(sample)).toBe('No SSN Available');
    });

  });


});
