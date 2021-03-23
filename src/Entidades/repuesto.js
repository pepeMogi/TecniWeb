
export function repuesto (doc) {


    this.id = doc.data().id;
    this.tipo = doc.data().tipo;
    this.nombre = doc.data().nombre;
    this.referencia = doc.data().referencia;
    this.cantidad = doc.data().cantidad;
    this.valor = doc.data().valor;
  
  }