import '@angular/core';

// Declares the styleUrl (singular) shorthand missing from Angular 21's type definitions.
// The .d.ts incorrectly names the single-string overload 'styleUrls', causing TS/NG conflicts.
declare module '@angular/core' {
  interface Component {
    styleUrl?: string;
  }
}
