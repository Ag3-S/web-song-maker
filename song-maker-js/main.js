const grid = document.getElementById("grid");

const gridlayout = document.createElement("div");
gridlayout.className = "grid-layout";
gridlayout.id = "grid-layout-1"

const labelsLeftSide = document.createElement("div");
labelsLeftSide.className = "labels-left-side";

const rulerSpacer = document.createElement("div");
rulerSpacer.className = "ruler-spacer";


const rowLabel = document.createElement("div");
rowLabel.className = "row-label";

labelsLeftSide.appendChild(rulerSpacer);
labelsLeftSide.appendChild(rowLabel);

gridlayout.appendChild(labelsLeftSide);
grid.appendChild(gridlayout);