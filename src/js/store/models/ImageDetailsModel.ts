export enum Position {
  LEFT = "left",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom"
}

export interface ImageDetailsType { // using for mock converter
  id: string;
  text: string;
  position: Position;
  color: string;
}

export class ImageDetailsModel {
  id: string;
  text: string;
  position: Position;
  color: string;

  constructor({text, position, color, id} = {text: "", position: Position.LEFT, color: "#000000", id: ""}) {
    this.text = text || "";
    this.position = position || Position.LEFT;
    this.color = color || "#000000";
    this.id = id || "";
  }
}
