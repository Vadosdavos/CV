const randomInt = (max: number, min: number) => Math.floor(Math.random() * (max - min) + min);

export default class Star {
  private x: number;

  private y: number;

  private radius: number;

  private color: string;

  private dy: number;

  private colors: string[];

  private canvasContext: CanvasRenderingContext2D | null;

  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, colors: string[], y?: number) {
    this.x = randomInt(0, canvas.width);
    this.y = y || randomInt(0, canvas.height);
    this.radius = Math.random() * 1.1;
    this.color = colors[randomInt(0, colors.length)];
    this.dy = -Math.random() * 0.3;
    this.colors = colors;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
  }

  draw() {
    if (this.canvasContext) {
      this.canvasContext.beginPath();
      this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.canvasContext.shadowBlur = randomInt(3, 15);
      this.canvasContext.shadowColor = this.color;
      this.canvasContext.strokeStyle = this.color;
      this.canvasContext.fillStyle = 'rgba( 255, 255, 255, .5)';
      this.canvasContext.fill();
      this.canvasContext.stroke();
      this.canvasContext.closePath();
    }
  }

  update(arrayStars : Star[] = []) {
    if (this.y - this.radius < 0) this.createNewStar(arrayStars);

    this.y += this.dy;
    this.draw();
  }

  createNewStar(arrayStars: Star[] = []) {
    const i = arrayStars.indexOf(this);
    arrayStars.splice(i, 1);
    arrayStars.push(new Star(this.canvas, this.colors, this.canvas.height + 5));
  }
}
