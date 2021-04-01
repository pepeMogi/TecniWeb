


export function ticketAlgolia (doc) {


    this.objectID = doc.data().objectID;
    this.nombre = doc.data().nombre;
    this.solicitante = doc.data().solicitante;
    this.asignado = doc.data().asignado;
    this.ciudad = doc.data().ciudad;
    this.estado  = doc.data().estado;
    this.factura = doc.data().factura;
    this.fechaCreacion   = doc.data().fechaCreacion;
    this.prioridad = doc.data().prioridad;
    this.tipo = doc.data().tipo;
    this.nit = doc.data().nit;
    this.maquina = doc.data().maquina;

  

}