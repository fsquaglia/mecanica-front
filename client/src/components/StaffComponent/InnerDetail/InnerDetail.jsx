

const InnerDetail = ({ type, data }) => {
    return (
      <div>
        <h2>{type === 'car' ? 'Vehiculo' : 'Usuario'}</h2>
        <ul>
          {type === 'car' && (
            <>
              <li>Patente: {data.patent}</li>
              <li>Marca: {data.mark}</li>
              <li>Modelo: {data.model}</li>
              {/* Agrega más campos específicos del automóvil aquí */}
            </>
          )}
          {type === 'user' && (
            <>
              <li>Email: {data.email}</li>
              <li>Nombre: {data.name}</li>
              <li>País: {data.country}</li>
              {/* Agrega más campos específicos del usuario aquí */}
            </>
          )}
        </ul>
      </div>
    );
  };
  
  export default InnerDetail;
  