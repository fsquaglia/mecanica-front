
const ValidService = (input) => {
  let errors = {};


    // Validaciones para el campo del detalle
   if (!input.detail.trim()) {
        errors.detail = "Este campo no puede estar vacio";
      }  else if (input.detail.length < 4) {
        errors.detail = "El detalle debe tener al menos 4 caracteres";
      }else if (input.detail.length > 50){
      errors.detail = "El detalle debe tener no mas de 50 caracters";
      }
      // Validaciones para el campo de la fecha de entrada
   else if (!input.date_in.trim()) {
        errors.date_in = "Este campo no puede estar vacio";
      }  else if (!isValidDate(input.date_in)) {
        errors.date_in = "Introduzca una fecha valida";
      }
      // Validaciones para el campo del numero de chasis
   else if (!input.date_out.trim()) {
        errors.date_out = "Este campo no puede estar vacio";
      }  else if (!isValidDate(input.date_out)) {
        errors.date_out = "Introduzca una fecha valida";
      }
      // Validaciones para el campo de observaciones
    else if (!input.observations.trim()) {
        errors.observations = "Este campo no puede estar vacio";
      }  else if (input.observations.length < 40) {
        errors.observations = "Este campo debe tener al menos 40 caracteres";
      }else if (input.observations.length > 500){
      errors.observations = "Este campo no debe tener mas de 500 caracters";
      }
  return errors;
};

export default ValidService;