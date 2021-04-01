


export function cliente (doc) {


    this.id = doc.data().id;
    this.nombre = doc.data().nombre;
    this.direccion = doc.data().direccion;
    this.celular = doc.data().celular;
    this.email = doc.data().email;
    this.cc  = doc.data().cc;
    this.ciudad = doc.data().ciudad;
    this.img   = doc.data().img;
    this.rut = doc.data().rut;   

}