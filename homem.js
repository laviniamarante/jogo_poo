class Homem {
  constructor(x, y, tamanho, altura, largura, vel, img){
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.img = img;

    // redimensiona a imagem
    // esse instanceof evita erros caso um valor inválido seja passado ao construtor
    // verifica se os obejtos vem do p5
    if (this.img instanceof p5.Image) {
      this.img.resize(0, this.img.height * 0.6);
      
    // A hitbox (colisão) é baseada no tamanho real da imagem, ou seja, sem estabelecer valores fixos
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
