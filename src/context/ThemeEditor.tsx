import set from "lodash/set";
import React, { createContext, FC } from "react";
import { fetchJson } from "../api/helpers";
import { StatusType, ThemeProperty } from "../types";

interface ThemeEditorContextProps {
  config: ThemeProperty;
  setValue: (key: string, value: string | number) => void;
  importTheme: (theme: ThemeProperty) => void;
}

export const ThemeEditorContext = createContext<ThemeEditorContextProps>({
  config: {},
  setValue: (key: string, value: string | number) => {},
  importTheme: (theme: ThemeProperty) => {},
});

const ThemeEditorProvider: FC<{}> = (props) => {
  const [status, setStatus] = React.useState<StatusType>("loading");
  const [config, dispatch] = React.useReducer(
    (
      prevState: ThemeProperty,
      action: (prev: ThemeProperty) => ThemeProperty
    ) => action(prevState),
    {}
  );

  React.useEffect(() => {
    if (status === "loading") {
      fetchJson<ThemeProperty>("./config.json")
        .then((res) => {
          dispatch((s) => {
            return res;
          });
          setStatus("success");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  }, [status, config, setStatus]);

  // Set key value function for edit form
  const setValue = (key: string, value: string | number) => {
    if (status === "success") {
      key += ".value";
      dispatch((s) => {
        let newTheme: any = { ...s };
        set(newTheme, key, value);
        return { ...newTheme };
      });
    }
  };

  const importTheme = (theme: ThemeProperty) => {
    if (status === "success") {
      dispatch((s) => {
        return { ...theme };
      });
    }
  };

  if (status === "loading") {
    return <div>Loading configuration ...</div>;
  }

  if (status === "error") {
    return <div>Can't load config file ...</div>;
  }

  return (
    <ThemeEditorContext.Provider value={{ config, setValue, importTheme }}>
      {props.children}
    </ThemeEditorContext.Provider>
  );
};

export default ThemeEditorProvider;
