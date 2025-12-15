class Flor {
  constructor(x, y, altura, largura, img, vel) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.vel = vel;

    if (this.img instanceof p5.Image) {
      this.img.resize(0, altura);
      this.largura = this.img.width;
      this.altura = this.img.height;
    } else {
      this.largura = largura;
      this.altura = altura;
    }
  }

  mostrar() {
    image(this.img, this.x, this.y);
    //noFill();
    //stroke("red");
    //rect(this.x, this.y, this.largura, this.altura);
  }
}
