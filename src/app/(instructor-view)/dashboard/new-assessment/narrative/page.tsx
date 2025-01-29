import React from "react";
import TextEditor from "../(componenents)/text-editor/tiny-editor";

const NarrativePage = () => {
  return (
    <div className="space-y-6">
      <TextEditor title="General Knowledge Base" content="" />
      <TextEditor title="Narrative Knowledge Base" content="" />
    </div>
  );
};

export default NarrativePage;
