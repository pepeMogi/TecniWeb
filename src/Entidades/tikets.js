

export function tiket (doc) {

    const getFecha = (times) => {
        const months = [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ];
        let current_datetime = times.toDate();
        let formatted_date =
          current_datetime.getDate() +
          "-" +
          months[current_datetime.getMonth()] +
          "-" +
          current_datetime.getFullYear();
    
        return formatted_date;
      };


    this.anexos = doc.data().anexos;
    this.asignado = doc.data().asignado;
    this.celularCliente = doc.data().celularCliente;
    this.celularSolicitante = doc.data().celularSolicitante;
    this.ciudad = doc.data().ciudad;
    this.contadorBN  = doc.data().contadorBN;
    this.contadorColor = doc.data().contadorColor;
    this.diagnostico   = doc.data().diagnostico;
    this.direccion = doc.data().direccion;
    this.email = doc.data().email;
    this.estado = doc.data().estado;
    this.factura = doc.data().factura;
    this.falla = doc.data().falla;
    this.fechaCreacion = getFecha(doc.data().fechaCreacion);
    this.id = doc.data().id;
    this.nombre = doc.data().nombre;
    this.prioridad = doc.data().prioridad;
    this.solicitante = doc.data().solicitante;
    this.tipo = doc.data().tipo;
    this.ultimaVisita = getFecha(doc.data().ultimaVisita);

  

}

