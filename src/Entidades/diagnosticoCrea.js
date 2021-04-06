
import { tecnico } from './tecnico';


  
export function diagnosticoCrea (tecnico,diagnostico, solucion, repuesto, imgs, comentario) {

var array = []
  for(var i = 0; i < repuesto.length; i++){
    var rep = repuesto[i].tipo + " " + repuesto[i].referencia + ": " + repuesto[i].nombre + " - " + repuesto[i].cantidad + "Und - $" + repuesto[i].valor;
    array.push(rep);
  }
   


  this.id = tecnico.replaceAll(" ","").concat((Math.random().toString().substring(0,4)).replaceAll(".",""));
  this.tecnico = tecnico;
  this.diagnostico = diagnostico;
  this.solucion = solucion;
  this.repuestos = array;
  this.imgs =  imgs;
  this.comentario = comentario;
  this.fecha = new Date();

}