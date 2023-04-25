import React, { useState } from "react";
import { Editor as EditorPR, EditorTextChangeEvent } from "primereact/editor";
import { EditorProps } from "./types";

export default function Editor({ text, setText }: EditorProps) {
  return (
    <EditorPR
      value={text}
      onTextChange={(e: EditorTextChangeEvent) => setText(e.textValue)}
      style={{ height: "150px" }}
    />
  );
}
