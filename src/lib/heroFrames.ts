export const TOTAL_FRAMES = 193;
export const FRAME_WIDTH = 1920;
export const FRAME_HEIGHT = 1080;
export const STUDIO_BG = "#d7eef8";

export const frameUrl = (index: number) =>
  `/frames/frame-${String(index + 1).padStart(4, "0")}.jpg`;
