export interface ShapeData {
  id: number;
  name: string;
  d: string;
  fill: string;
  opacity: number;
  originX: number;
  originY: number;
  initialRotation?: number; // Optional rotation for the resting state
}
