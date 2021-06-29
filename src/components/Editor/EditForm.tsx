import { Divider, Toolbar, List } from "@material-ui/core";
import React from "react";
import { ThemeEditorContext } from "../../context/ThemeEditor";
import Property from "./Property";
import { toPairs } from "lodash";

export default function EditForm() {
  const { config } = React.useContext(ThemeEditorContext);
  const themes = toPairs(config);

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {themes.map((t) => (
          <Property key={t[0]} name={t[0]} data={t[1]} />
        ))}
      </List>
    </div>
  );
}
