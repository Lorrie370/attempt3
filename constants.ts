import { ShapeData } from './types';

// Helper to create circle path
const circlePath = (cx: number, cy: number, r: number) => 
  `M ${cx-r}, ${cy} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 -${r*2},0`;

export const SHAPES: ShapeData[] = [
  // --- Top Structure ---
  {
    id: 1,
    name: "PurpleTopTriangle",
    d: "M300 160 L340 310 L300 310 Z",
    fill: "#9C27B0",
    opacity: 0.6,
    originX: 313,
    originY: 260
  },
  {
    id: 2,
    name: "OrangeCircleTopLeft",
    d: circlePath(270, 270, 40),
    fill: "#F57C00",
    opacity: 0.75,
    originX: 270,
    originY: 270
  },
  {
    id: 3,
    name: "BrownTriangleTopLeft",
    d: "M200 360 L300 375 L270 300 Z",
    fill: "#8D6E63",
    opacity: 0.8,
    originX: 256,
    originY: 345
  },
  {
    id: 4,
    name: "RedBrownCircleTopRight",
    d: circlePath(365, 310, 38),
    fill: "#A1887F",
    opacity: 0.6,
    originX: 365,
    originY: 310
  },
  // --- Middle Structure ---
  {
    id: 5,
    name: "GreenSpineTriangle",
    d: "M310 290 L130 590 L330 590 Z",
    fill: "#7CB342",
    opacity: 0.7,
    originX: 256,
    originY: 490
  },
  {
    id: 6,
    name: "YellowTriangleRight",
    d: "M300 390 L430 340 L410 450 Z",
    fill: "#FDD835",
    opacity: 0.75,
    originX: 380,
    originY: 393
  },
  {
    id: 7,
    name: "MagentaCircleLeft",
    d: circlePath(230, 445, 58),
    fill: "#AD1457",
    opacity: 0.8,
    originX: 230,
    originY: 445
  },
  {
    id: 8,
    name: "BigGreenCircleRight",
    d: circlePath(370, 500, 80),
    fill: "#689F38",
    opacity: 0.7,
    originX: 370,
    originY: 500
  },
  // --- Bottom Structure ---
  {
    id: 9,
    name: "RedOrangeTriangleBottom",
    d: "M80 690 L350 630 L330 490 Z",
    fill: "#FF3D00",
    opacity: 0.75,
    originX: 253,
    originY: 603
  },
  {
    id: 10,
    name: "SmallBrownTriangleBottomRight",
    d: "M380 620 L460 680 L440 580 Z",
    fill: "#795548",
    opacity: 0.7,
    originX: 426,
    originY: 626
  },
  {
    id: 11,
    name: "PurpleRectBottom",
    // rect x=240 y=650 w=120 h=90 rotated -5deg around 300,695
    d: "M240 650 H360 V740 H240 Z",
    fill: "#7E57C2",
    opacity: 0.65,
    originX: 300,
    originY: 695,
    initialRotation: -5
  },
  {
    id: 12,
    name: "DarkGreenSquareBottomLeft",
    // rect x=195 y=670 w=80 h=85
    d: "M195 670 H275 V755 H195 Z",
    fill: "#33691E",
    opacity: 0.8,
    originX: 235,
    originY: 712
  },
  {
    id: 13,
    name: "YellowSquareBottomRight",
    // rect x=350 y=670 w=70 h=70 rotated 30deg around 385,705
    d: "M350 670 H420 V740 H350 Z",
    fill: "#FFD600",
    opacity: 0.7,
    originX: 385,
    originY: 705,
    initialRotation: 30
  },
  // --- Star (Top) ---
  {
    id: 14,
    name: "YellowStarPart1",
    d: "M260 135 L360 75 L300 180 Z",
    fill: "#FFEB3B",
    opacity: 0.6,
    originX: 306,
    originY: 130
  },
  {
    id: 15,
    name: "YellowStarPart2",
    d: "M260 135 L320 110 L300 180 Z",
    fill: "#FFF176",
    opacity: 0.5,
    originX: 293,
    originY: 141
  }
];
