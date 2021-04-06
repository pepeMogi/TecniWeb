export function maquinaDoc(doc) {

  this.cliente = doc.data().cliente;
  this.contadorBN = doc.data().contadorBN;
  this.contadorColor = doc.data().contadorColor;
  this.id = doc.data().id;
  this.img = doc.data().img;
  this.marca = doc.data().marca;
  this.modelo = doc.data().modelo;
  this.serial = doc.data().serial;
  this.tipo = doc.data().tipo;

}
