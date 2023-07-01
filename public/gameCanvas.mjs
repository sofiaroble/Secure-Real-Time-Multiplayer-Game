// setup canvas
const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const headingHeight = 35;
const buffer = 10;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const dimensions = Object.freeze({
  context,
  headingHeight,
  buffer,
  canvasWidth,
  canvasHeight,
  minX: buffer,
  minY: headingHeight,
  maxX: canvasWidth - buffer,
  maxY: canvasHeight - buffer,
});

const arena = {
  clearCanvas: () => {
    context.clearRect(0, 0, dimensions.canvasWidth, dimensions.canvasHeight);
  },
  drawCanvas: () => {
    const gameBg = "#191919";
    arena.setFillStyle(gameBg);
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  },
  drawHeading: () => {
    // game title
    arena.setFillStyle("white");
    arena.setFont("bold 18px Arial");
    context.fillText("Hungry Hungry Blocks", canvasWidth / 2, 22.5);
    // control directions
    arena.setFont("13px Arial");
    context.fillText("Controls: WASD", 70, 22.5);
  },
  drawRank: (player) => {
    arena.setFillStyle("white");
    arena.setFont("13px Arial");
    context.fillText(`${player.getRank()}`, canvasWidth - 75, 22.5);
  },
  setFillStyle: (style) => {
    context.fillStyle = style;
  },
  setFont: (font) => {
    context.font = font;
  }
};
try {
  module.exports = Collectible;
} catch (e) {}

export { dimensions, arena };
