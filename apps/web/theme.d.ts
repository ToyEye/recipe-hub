import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    placeholder: string;
    accent: string;
    accentTransparentHover: string;
    hover: string;
    header: string;
    text: ModalTypeText;
  }

  interface ModalTypeText {
    primary: string;
    primaryTransparent: string;
    secondary: string;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    modal?: Partial<TypeText>;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface TypographyVariants {
    modalHeader: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
    modalText: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
    modalBtn: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
  }

  interface TypographyVariantsOptions {
    modalHeader: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
    modalText: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
    modalBtn: React.CSSProperties | React.HTMLAttributes<HTMLElement>;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    modalHeader: true;
    modalText: true;
    modalBtn: true;
  }
}
