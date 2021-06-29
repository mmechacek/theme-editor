import { Button, Collapse, List, ListItem, useTheme } from "@material-ui/core";
import { toPairs } from "lodash";
import React from "react";
import { IThemeItem, ThemeProperty } from "../../../types";
import { getButtonStyle, getFormattedName } from "../../../utils";
import PropertyItem from "../PropertyItem/PropertyItem";
import { usePropertyStyles } from "./styles";

interface Props {
  name: string;
  data: ThemeProperty;
}

export default function Property(props: Props) {
  let defaultOpenState = false;

  if (
    props.name === "general" ||
    props.name === "general.palette" ||
    props.name === "general.palette.primary" ||
    props.name === "general.palette.secondary"
  ) {
    defaultOpenState = true;
  }

  const [open, setOpen] = React.useState<boolean>(defaultOpenState);
  const classes = usePropertyStyles();
  const theme = useTheme();

  const handleOpen = (open: boolean) => () => {
    setOpen(!open);
  };

  // Render item when have key value
  const keys = Object.keys(props.data);
  if (keys.some((k) => k === "value")) {
    // Render Item
    return <PropertyItem name={props.name} data={props.data as IThemeItem} />;
  }

  // Child Properties to pairs
  const properties = toPairs(props.data);
  let buttonStyle = getButtonStyle(theme, props.name);

  // Render Child properties
  return (
    <React.Fragment>
      <ListItem className={classes.item}>
        <Button
          style={buttonStyle}
          classes={{ root: classes.buttonRoot }}
          onClick={handleOpen(open)}
        >
          {props.name === "general"
            ? "Material UI"
            : getFormattedName(props.name)}
        </Button>
      </ListItem>
      <Collapse in={open}>
        <List>
          {properties.map((property) => (
            <Property
              key={property[0]}
              name={`${props.name}.${property[0]}`}
              data={property[1]}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}
