import { ListItem } from "@material-ui/core";
import React from "react";
import { IThemeItem } from "../../../types";
import PropertyColor from "../PropertyColor";
import { usePropertyItemStyle } from "./style";
import PropertyInput from "../PropertyInput/PropertyInput";

interface Props {
  name: string;
  data: IThemeItem;
}

export default function PropertyItem(props: Props) {
  const classes = usePropertyItemStyle();

  return (
    <ListItem className={classes.root}>
      {props.data.valueType === "color" ? (
        <PropertyColor
          valueKey={props.name}
          value={props.data.value as string}
          dependent={props.data.dependent}
        />
      ) : null}
      {props.data.valueType === "string" ? (
        <PropertyInput
          valueKey={props.name}
          value={props.data.value as string}
          type="string"
        />
      ) : null}
      {props.data.valueType === "number" ? (
        <PropertyInput
          valueKey={props.name}
          value={props.data.value as number}
          type="number"
        />
      ) : null}
    </ListItem>
  );
}
