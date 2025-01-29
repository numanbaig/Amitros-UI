import React from "react";
import { RubricTable } from "../(componenents)/rubric-table";
const sampleRubric = [
  {
    name: "Use of Source Evidence",
    levels: [
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
    ],
  },
  {
    name: "Criteria 2",
    levels: [
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
      {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, arcu a volutpat maximus, massa nibh bibendum erat, eu varius velit lacus ut mi. Aenean ut erat rutrum leo laculis fringilla sed eu nisi. Vestibulum augue odio, rutrum a nibh viverra, pellentesque malesuada elit. Proin eget lectus euismod, viver`,
      },
    ],
  },
];
const RubricPage = () => {
  return (
    <div>
      <RubricTable criteria={sampleRubric} />
    </div>
  );
};

export default RubricPage;
