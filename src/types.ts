export type StatusType = "loading" | "error" | "success";

export type ThemeItemType = "color" | "string" | "number";
export type ThemeItemValue = string | number;

// Final types for property
export interface IThemeItem {
  valueType: ThemeItemType;
  value: ThemeItemValue;
  dependent?: boolean;
}

export interface IThemeProperty {
  [key: string]: ThemeProperty;
}

export type ThemeProperty = IThemeProperty | IThemeItem;
export type ThemeExport = IThemeProperty | string;

export type HeadingVariant =
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "overline"
  | "srOnly"
  | undefined;

export type LoadStatus = "init" | "loading" | "error" | "loaded";
export type MergeStatus = "init" | "merging" | "success";
