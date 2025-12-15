class Abelha {
  constructor (x, y, tamanho, altura, largura, velX, velY, img, topoPlat){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.gravidade = 0.5;
    this.impulso = -(velY * 2);
    this.topoPlat = topoPlat;

    this.img = img;

    if (this.img instanceof p5.Image) {
      this.img.resize(0, this.img.height * 0.6);
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

  moverHorizontal(){
    this.x += this.velX;
  }

  moverVertical(){
    this.velY += this.gravidade;
    this.y += this.velY;

    if (keyIsDown(UP_ARROW)) {
      this.y += this.impulso;
      this.velY = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velY = 0;
    }
  }

  caiu(){
    return this.y > this.topoPlat - this.altura;
  }

  colidiu(npc){
    return (
      this.x + this.largura > npc.x &&
      this.x < npc.x + npc.largura &&
      this.y + this.altura > npc.y &&
      this.y < npc.y + npc.altura
    );
  }
}
