import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import { getFormattedName } from "../../../utils";
import { ThemeEditorContext } from "../../../context/ThemeEditor";
import usePropertyInputStyle from "./style";
import SaveIcon from "@material-ui/icons/Save";

interface Props {
  value: string | number;
  valueKey: string;
  type: "string" | "number";
}

export default function PropertyInput(props: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [submit, setSubmit] = React.useState<boolean>(false);
  const { setValue } = React.useContext(ThemeEditorContext);
  const [input, setInput] = React.useState<string>(props.value as string);
  const classes = usePropertyInputStyle();

  // Update value on submit
  React.useEffect(() => {
    if (submit) {
      if (props.type === "string") {
        setSubmit(false);
        setValue(props.valueKey, input.toString());
      } else {
        setSubmit(false);
        setValue(props.valueKey, parseInt(input));
      }
    }
  }, [input, props, submit, setValue]);

  // Change on props change
  React.useEffect(() => {
    setInput(props.value as string);
  }, [props]);

  // Submit on "enter" press
  const submitInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13 && buttonRef.current && input.length) {
      if (props.type === "string") {
        setValue(props.valueKey, input.toString());
      } else {
        setValue(props.valueKey, parseInt(input));
      }
      setSubmit(false);
      buttonRef.current.focus();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setInput(event.target.value as string);
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubmit(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <TextField
          ref={inputRef}
          value={input.toString()}
          label={getFormattedName(props.valueKey)}
          onChange={handleChange}
          fullWidth
          type="text"
          onKeyUp={submitInput}
          error={input !== "" ? false : true}
          helperText={input === "" ? "Missing value" : ""}
        />
      </div>
      <div
        className={classes.saveButton}
        style={{
          display:
            props.value.toString() !== input.toString() ? "block" : "none",
        }}
      >
        <IconButton onClick={handleSave} ref={buttonRef}>
          <SaveIcon />
        </IconButton>
      </div>
    </div>
  );
}
