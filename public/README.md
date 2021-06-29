# Dynamic MUI Theme editor

## What you can do?

App is made for dynamic creation of Material UI extendable by custom properties

### Create your own config.json file

❗ Do not use comments in JSON.. they are here only as info

#### Value type

```ts
type ValueType = "color" | "number" | "string";

type Key = {
  valueType: ValueType;
  value: string | number;
  /* dependent: Use for subcolors.
     It generates button to autoset color from "main"
     use only for "light", "dark", "contrastText",
     where "main" is in the scope */
  dependent?: true;
};
```

#### JSON

```json
{
  "general": {
    "palette": {
      "primary": {
        // Key type
        "main": {
          "valueType": "color",
          "value": "#3f51b5"
        },
        "light": {
          "valueType": "color",
          "dependent": true,
          "value": "#7986cb"
        },
        "dark": {
          "valueType": "color",
          "dependent": true,
          "value": "#303f9f"
        },
        "contrastText": {
          "valueType": "color",
          "dependent": true,
          "value": "#FFFFFF"
        }
      }
    }
  }
}
```
