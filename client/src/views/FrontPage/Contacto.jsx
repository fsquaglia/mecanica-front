import {useState } from "react";
import style from './styles/Contacto.module.css'
import GenericButton from '../../components/GenericButton/GenericButton'
import {HandlError,showSuccess, showError} from '../../components/Auth/HandlerError';
import {validateEmail } from './Auxiliar';
import showConfirmationDialog from '../../components/utils/sweetAlert'



const Contacto = () => {
  const initialInput = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [input, setInput] = useState(initialInput);
  const [isSubmit, setIsSubmit] = useState(false);

  const [error, setError] = useState({
      name:"",
      email: "",
      subject: "",
      message: "",
    });


  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setError({
      ...error,
      [name]: validateEmail({ ...input, [name]: value })[name],
    });
  };

 

  const handleSubmit = async(e) => {
    const validationErrors= validateEmail(input)
    e.preventDefault();
    setError(validationErrors);
    if (Object.values(validationErrors).every((error) => error === "")&& isSubmit) 
    setIsSubmit(true);
    
    const confirmed = await showConfirmationDialog('¿Desea enviarnos un email? Confirme su accion');
    if (confirmed) {
        // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      try {
        console.log('enviando post', {
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
        });
        setInput(initialInput);
        showSuccess("Mensaje enviado exitosamente");
      } catch (error) {
        console.error(error);
        showError('Acontecio un error, mensaje no enviado')
        HandlError(error)
      }
    }
    }

  const permit =
  !input.name.trim() ||
  !input.email.trim() ||
  !input.subject.trim() ||
  !input.message.trim() ||
  error.name ||
  error.email ||
  error.subject ||
  error.message;


  return (
    <section>
      <div >
        <div>
          <h2>
            Contactenos:
          </h2>
        </div>
        <div  className={style.contact}>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                value={input.name}
                className="input"
                type="text"
                placeholder="Su nombre..."
                onChange={handleOnChange}
              />
              {error.name && <p>{error.name}</p>}
              <input
                name="email"
                value={input.email}
                className="input"
                type="email"
                placeholder="Su email..."
                onChange={handleOnChange}
              />
              {error.email && <p>{error.email}</p>}
            </div>
            <input
              name="subject"
              value={input.subject}
              className="input"
              type="text"
              placeholder="Asunto..."
              onChange={handleOnChange}
            />
            {error.subject && <p>{error.subject}</p>}
            <textarea
              name="message"
              value={input.message}
              className="textarea"
              placeholder="Su mensaje..."
              onChange={handleOnChange}
            ></textarea>
            {error.message && <p>{error.message}</p>}
            <GenericButton type='submit' buttonText= {'Enviar e-mail'} disabled={permit}/>
          </form>
          </div>
        
      </div>
    </section>
  );
};
export default Contacto