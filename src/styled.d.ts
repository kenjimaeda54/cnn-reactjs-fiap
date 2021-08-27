import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      blue: string;
      primary: string;
      gray: string;
      with: string;
      red: string;
    };
  }
}
