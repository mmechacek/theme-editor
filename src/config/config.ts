import { createMuiTheme, Theme } from "@material-ui/core";
import { ThemeProperty } from "../types";
import { extractValues } from "../utils";
import { get } from "lodash";

export const drawerWidth = 300;
export const editorTheme = createMuiTheme({});

export function getMuiTheme(editorTheme: ThemeProperty): Theme {
  let exported = extractValues(editorTheme);
  let mui = get(exported, "general", undefined);
  if (typeof mui === "undefined") {
    console.log("Problem when creating MuiTheme");
  }
  return createMuiTheme({
    ...mui,
  });
}
