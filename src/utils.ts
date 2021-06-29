import { Theme, darken, lighten } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ThemeProperty } from "./types";
import { get } from "lodash";
import { ColorResult } from "react-color";

export function extractValues(obj: any) {
  const keys = Object.keys(obj);
  if (keys.some((k) => k === "value")) {
    return obj.value;
  } else {
    return keys.reduce((p, key) => {
      p[key] = extractValues(obj[key]);
      return p;
    }, {} as any);
  }
}

export function getFormattedName(name: string): string {
  let keys = name.split(".");
  let last = keys[keys.length - 1];
  return last.charAt(0).toUpperCase() + last.slice(1);
}

export function getButtonStyle(theme: Theme, name: string): CSSProperties {
  switch (name.split(".").length) {
    case 1: {
      return {
        paddingLeft: `${theme.spacing(2)}px`,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: 700,
      };
    }
    default: {
      let num = name.split(".").length;
      return {
        paddingLeft: `${theme.spacing(num * 2 - 2)}px`,
        fontWeight: 700,
      };
    }
  }
}

export function generateShadeOrContrast(
  muiTheme: Theme,
  theme: ThemeProperty,
  valueKey: string,
  value: string
): string {
  let keys = valueKey.split(".");
  let last = keys[keys.length - 1];
  let mainColor = getMainColorValue(theme, valueKey);

  if (last === "dark") {
    return darken(mainColor, 0.2);
  }
  if (last === "light") {
    return lighten(mainColor, 0.2);
  }
  if (last === "contrastText") {
    return getContrastColor(muiTheme, getMainColorValue(theme, valueKey));
  }
  return "#000000";
}

export function getContrastColor(muiTheme: Theme, background: string): string {
  return muiTheme.palette.getContrastText(background);
}

export function getMainColorValue(
  theme: ThemeProperty,
  valueKey: string
): string {
  let key = valueKey.split(".");
  key.pop();
  let mainKeyValue = key.join(".") + ".main.value";
  let mainValue = get(theme, mainKeyValue, "#000000");
  if (mainValue === "#000000") {
    console.log("Main color not found.. returning default");
  }
  return mainValue;
}

export function formatColor(color: ColorResult): string {
  if (color.rgb.a && color.rgb.a < 1) {
    return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
  }
  return color.hex;
}

export function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
