import { dimensions, arena } from "./gameCanvas.mjs";

class Player {
  constructor({ x, y, score = 0, id, local = false }, size = 10) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.size = size;
    this.local = local;
  }

  draw() {
    const ctx = dimensions.context;
    ctx.fillStyle = this.local ? "green" : "purple";  // Local player is green, others are purple
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  movePlayer(dir, speed = 10) {
    const directionKeyMap = { w: "up", s: "down", a: "left", d: "right" }[dir];

    const movement = {
      up: Math.max(dimensions.minY, this.y - speed),
      down: Math.min(dimensions.maxY - this.size, this.y + speed),  
      left: Math.max(dimensions.minX, this.x - speed),
      right: Math.min(dimensions.maxX - this.size, this.x + speed),  
      
    }[directionKeyMap];

    if (directionKeyMap == "up" || directionKeyMap == "down") {
      this.y = movement;
    } else {
      this.x = movement;
    }
  }

  collision(item) {
    const xCollision = !(
      this.x > item.x + item.size || this.x + this.size < item.x
    );
    const yCollision = !(
      this.y > item.y + item.size || this.y + this.size < item.y
    );

    if (xCollision && yCollision) {
      this.score = this.score + 1;
      return true;
    }
    return false;
  }

  calculateRank(arr) {
    const totalPlayers = arr.length;
    const rankedListings = arr.sort((a, b) => (a.score < b.score ? 1 : -1));
    const currentRanking = rankedListings.findIndex((p) => p.id == this.id) + 1;
    const rankingText = `Rank: ${currentRanking}/${totalPlayers}`;

    arena.drawRank(rankingText);
    return `Rank: ${currentRanking}/${totalPlayers}`;
  }
}

export default Player;
