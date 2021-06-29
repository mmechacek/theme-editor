import { Box } from "@material-ui/core";
import { DiffEditor } from "@monaco-editor/react";
import React from "react";

const options: any = {
  automaticLayout: true,
  colorDecorators: true,
};

const value = `function bla() {
    console.log("bla");
  }
  bla();
`;

export default function TestComponent() {
  const valueRef = React.useRef<any>(null);
  const editorRef = React.useRef<any>(null);

  const [isReady, setIsReady] = React.useState<boolean>(false);

  const handleEditorDidMount = (modified: any, original: any, editor: any) => {
    valueRef.current = modified;
    editorRef.current = editor;
    setIsReady(true);
  };

  React.useEffect(() => {
    if (isReady) {
      editorRef.current.onDidUpdateDiff(() => {
        console.log(valueRef.current());
      });
    }
  }, [isReady, valueRef]);

  return (
    <Box width="100%" height={500}>
      <DiffEditor
        original={value}
        modified={value}
        editorDidMount={handleEditorDidMount}
        language="javascript"
        options={options}
        theme="dark"
      />
    </Box>
  );
}
