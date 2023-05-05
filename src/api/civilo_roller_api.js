//Archivo donde se definirán todas las conexiones a la api de civilo_roller

const URL_CIVILO = "http://localhost:8080"
const RUTA_LOGIN = "/users/login"
const RUTA_REGISTER = "/users/register"


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
        } else {
          console.log("Registro fallido");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  