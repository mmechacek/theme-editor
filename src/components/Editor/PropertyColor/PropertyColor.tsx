import { Button, Popover, useTheme, Theme } from "@material-ui/core";
import BrightnessAutoIcon from "@material-ui/icons/BrightnessAuto";
import React from "react";
import { ChromePicker, ColorResult } from "react-color";
import { ThemeEditorContext } from "../../../context/ThemeEditor";
import {
  generateShadeOrContrast,
  getFormattedName,
  formatColor,
} from "../../../utils";
import useItemColorStyles from "./style";

interface Props {
  value: string;
  valueKey: string;
  dependent?: boolean;
}

export default function PropertyColor(props: Props) {
  const { config, setValue } = React.useContext(ThemeEditorContext);
  const theme = useTheme();
  const classes = useItemColorStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (color: ColorResult) => {
    setValue(props.valueKey, formatColor(color));
  };

  const handleAutoColor = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // Get new color and set it
    let newColor = generateShadeOrContrast(
      theme as Theme,
      config,
      props.valueKey,
      props.value
    );
    setValue(props.valueKey, newColor);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-picker" : undefined;

  return (
    <React.Fragment>
      <Button className={classes.root} onClick={handleClick}>
        <div className={classes.color}>
          <span
            className={classes.colorBadge}
            style={{ backgroundColor: props.value }}
          />
        </div>
        <div className={classes.info}>
          <span className={classes.infoTitle}>
            {getFormattedName(props.valueKey)}
          </span>
          <span className={classes.infoValue}>{props.value}</span>
        </div>
        {props.dependent ? (
          <div className={classes.buttonAutoWrapper} onClick={handleAutoColor}>
            <BrightnessAutoIcon className={classes.buttonAuto} />
          </div>
        ) : null}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClose}
      >
        <ChromePicker color={props.value} onChangeComplete={handleChange} />
      </Popover>
    </React.Fragment>
  );
}
