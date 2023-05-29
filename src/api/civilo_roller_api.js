//Archivo donde se definirán todas las conexiones a la api de civilo_roller

const URL_CIVILO = "http://localhost:8080"
const RUTA_GET_USERS = "/users"
const RUTA_HOME = "/"
const RUTA_LOGIN = "/users/login"
const RUTA_REGISTER = "/users/register"
const RUTA_LOGOUT_CLIENTE = "/users/logout"
const RUTA_MIS_SOLICITUDES_CLIENTE = "/requests/clientRequest/";
const RUTA_VENDEDORES = "/sellers"
const RUTA_COBERTURAS = "/coverages"
const RUTA_ASIGNACIONES_VENDEDOR = "/requests/sellerRequest" // +`${ID DEL VENDEDOR}`

export const getAllUsers = async () => {
  const respuesta = await fetch(`${URL_CIVILO}${RUTA_GET_USERS}`);
  const usuarios = await respuesta.json();
  return usuarios;
}

export const obtenerVendedor = async (idVendedor) => {
  const respuesta = await fetch(`${URL_CIVILO}${RUTA_VENDEDORES}/${idVendedor}`);
  const vendedor = await respuesta.json();
  return vendedor;
}

export const obtenerCoberturas = async () => {
  const respuesta = await fetch(`${URL_CIVILO}${RUTA_COBERTURAS}`)
  const coberturasJSON = await respuesta.json();
  return coberturasJSON; 

}

export const obtenerAsignacionesVendedor = async (id_vendedor) => {
  const respuesta = await fetch(`${URL_CIVILO}${RUTA_ASIGNACIONES_VENDEDOR}/${id_vendedor}`);
  const asignaciones = await respuesta.json();
  return asignaciones;  
}


export const iniciarSesion = (usuario) => {
    //Se envia la peticion POST al servidor
    fetch(`${URL_CIVILO}${RUTA_LOGIN}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(usuario),
    })
        .then((response) => {
        if (response.ok) {
            console.log("Login successful");
        }else {
          console.log("Login failed");
        }
      })
        .catch((error) => {
            console.error("Error:", error);
      });
}


export const registrarUsuario = (usuario) => {
    fetch(`${URL_CIVILO}${RUTA_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registro exitoso");
          console.log(usuario.role.accountType);
          if (usuario.role.accountType === "Cliente") {
            window.location.href = 'http://localhost:3000/login';
          } else if (usuario.role.accountType === "Vendedor") {
            localStorage.setItem('email', JSON.stringify(usuario.email));
            console.log(usuario);
            window.location.href = 'http://localhost:3000/seller/sellerInformation';
          } 
          //si el usuario registrado es de tipo ejecutivo o administrador
          else if((usuario.role.accountType.toLowerCase() === "ejecutivo") || (usuario.role.accountType.toLowerCase() === "administrador")){
            alert("Usuario agregado con exito");
            setTimeout(()=>{
              //Se recarga la pagina luego de 2 segundos
            window.location.reload();

            },2000);
          }
        } else {
          console.log("Registro fallido");
        }
      })
      .catch((error) => {
        alert("Error al registrar usuario");
        console.error("Error:", error);
      });
  }


  //funcion para cerrar la sesion de un usuario tipo cliente
  export const cerrarSesionUsuario = () => {
    sessionStorage.removeItem('user');
    fetch(`${URL_CIVILO}${RUTA_LOGOUT_CLIENTE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = RUTA_HOME;
        } else {
          throw new Error("Error en la solicitud de logout");
        }
      })
      .catch((err) => console.error(err));
  };


  export const iniciarSesionCliente = async (event, formData) => {
    event.preventDefault();
    try {
      const response = await fetch(`${URL_CIVILO}${RUTA_LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const email = formData.email;
        const userData = await fetch(`${URL_CIVILO}/users/${email}`);
        const data = await userData.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        console.log(sessionStorage.getItem('user'));
        const url = `/client?email=${encodeURIComponent(
          formData.email
        )}&password=${encodeURIComponent(formData.password)}`;
        window.location.replace(RUTA_HOME);
      } else {
        alert("Email o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

//Funcion que pide los datos al servidor de las solicitudes de un cliente especifico
export const solicitarMisSolicitudes = async (id_usuario) => {
  const response = await fetch(`${URL_CIVILO}${RUTA_MIS_SOLICITUDES_CLIENTE}${id_usuario}`);
  const solicitudes = await response.json();
  return solicitudes;
}





  
  