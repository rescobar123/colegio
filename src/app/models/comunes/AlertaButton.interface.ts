interface AlertButton {
    text: string;
    role?: 'cancel' | 'destructive' | string;
    cssClass?: string | string[];
    handler?: (value: any) => boolean | void | {[key: string]: any};
  }