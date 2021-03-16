
// modelo de Tiket
var tiket = {
    id: ,
    idCliente: ,
   nombre:  ,
   direccion: ,
   celular: ,
   celularDos: ,
   anexos: ,
   asignado: ,
   ciudad: ,
   comentario: ,
   diagnostico: , // es array
   direccion: ,
   email: ,
   estado: ,
   factura: ,
   falla: ,
   fechaCrecion: , // new Date();
   legalizcion: , // new Date()
   maquinas: , // array
   prioridad: , 
   tipo: ,
   ultimaVisita: ,

}

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