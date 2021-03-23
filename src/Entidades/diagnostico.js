
export function diagnostico (doc) {


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


    this.id = doc.data().id;
    this.tecnico = doc.data().tecnico;
    this.diagnostico = doc.data().diagnostico;
    this.solucion = doc.data().solucion;
    this.repuestos = doc.data().repuestos;
    this.imgs = doc.data().imgs;
    this.comentario = doc.data().comentario;
    this.fecha = getFecha(doc.data().fecha);
  
  }