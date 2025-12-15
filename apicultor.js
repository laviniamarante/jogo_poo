class Apicultor {
  constructor(x, y, tamanho, altura, largura, vel, img){
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.img = img;

    // redimensiona a imagem
    if (this.img instanceof p5.Image) {
      this.img.resize(0, this.img.height * 0.6);
      this.largura = this.img.width;
      this.altura = this.img.height;
    } else {
      this.largura = largura;
      this.altura = altura;
    }
  }

  mostrar(){
    image(this.img, this.x, this.y);
    //noFill();
    //stroke("red");
    //rect(this.x, this.y, this.largura, this.altura);
  }
}
