import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BlindsIcon from '@mui/icons-material/Blinds';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { cerrarSesionCliente } from '../api/civilo_roller_api';

const RUTA_LOGIN = "/login";
const RUTA_HOME = "/";
const RUTA_REGISTER = "/register";
const RUTA_SOLICITUDES_CLIENTE = "/client/request"


function NavbarResponsive() {

  //const pages = ['Inicio','otra cosa', 'xd'];
  //const settings = ['Iniciar Sesion', 'Registrarse'];


  const pagesHome = ['Inicio','item 1', 'item xd'];
  const settingsHome = ['Iniciar Sesion', 'Registrarse'];

  const pagesCLiente = ['Inicio', 'Mis Solicitudes'];
  const settingsCliente = ['Cerrar Sesión'];

  const pagesVendedor = ['Inicio'];
  const settingsVendedor = ['Cerrar Sesion'];

  let userLocalStorage = JSON.parse(sessionStorage.getItem('user'));
  const [pages, setPages] = useState(pagesHome);
  const [settings, setSettings] = useState(settingsHome);
  const [sesionUsuario, setSesionUsuario] = useState(userLocalStorage);

  
  //En caso de cambiar el tipo de sesion, se actualizara la barra de navegacion
  useEffect(() => {
    //Si no hay ninguna sesion activa, se muestran las siguientes opciones en la barra de navegacion
    if (userLocalStorage === null) {
      setPages(pagesHome);
      setSettings(settingsHome);
    }
    //Si existe una sesion activa y es de tipo cliente
    else if(userLocalStorage.role.accountType.toLowerCase() === 'cliente'){
      //se muestran las siguientes opciones en la barra de navegacion
      setSesionUsuario(userLocalStorage.role.accountType);
      setPages(pagesCLiente);
      setSettings(settingsCliente);
    }
  }, [sesionUsuario]);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //Evento cuando es presionado el icono de hamburguesa disponible en pantallas pequeñas
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //Evento cuando es presionado el menu con el logo de usuario
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  //Evento cuando alguno de los item de la barra de navegacion es presionado
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    const itemSeleccionado = event.target.textContent.toLowerCase();
    
  };

  //Evento cuando es presionado alguno de los items del menu de usuario
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
    const itemSeleccionado = event.target.textContent.toLowerCase();

    //si el item seleccionado es cerrar sesion (en la vista cliente)
    if(itemSeleccionado === 'cerrar sesión'){
      //Se cierra la sesion del cliente y se actualiza el valor de sesion usuario
      //para actualizar las opciones de la barra de navegacion
      cerrarSesionCliente();
      setSesionUsuario(null);
    }
  };


  // //funcion para cerrar la sesion de un usuario tipo cliente
  // const cerrarSesionCliente = () => {
  //   sessionStorage.removeItem('user');
  //   fetch("http://localhost:8080/users/logout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         window.location.href = "/";
  //       } else {
  //         throw new Error("Error en la solicitud de logout");
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  //Funcion que evalua el item del menu y asigna la ruta que se debe seguir cuando este boton sea presionado
  const definirRuta = (item) => {

    const itemSeleccionado = item.toLowerCase();

    if(itemSeleccionado === 'inicio'){
      return RUTA_HOME;
    }
    else if(itemSeleccionado === 'iniciar sesion'){
      return RUTA_LOGIN
    }
    else if(itemSeleccionado === 'registrarse'){
      return RUTA_REGISTER
    }

    else if(itemSeleccionado === 'mis solicitudes'){
      //Si existe una sesion activa
      if(JSON.parse(sessionStorage.getItem('user')) !== null){
        //Si es de tipo cliente
        if(JSON.parse(sessionStorage.getItem('user')).role.accountType.toLowerCase() === 'cliente'){
          return RUTA_SOLICITUDES_CLIENTE
        }

      }
      
    }
    else return "/";

  }

  //Configuracion del menu de hamburguesa disponibles en pantallas moviles
  const mostrarOpcionesMovil = (pages) => {
    let ruta;
    return pages.map((page) => { 
      ruta = definirRuta(page);
      return(
      <Link to={ruta} style={{ textDecoration: 'none' }}> 
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        <Typography textAlign="center" color={"black"}>{page}</Typography>
      </MenuItem>
      </Link>
    )})
  }

  //Configuracion del menu de la barra de navegacion disponible en pantallas de escritorio
  const mostrarOpcionesDesktop = (pages) => {
    let ruta;
    return pages.map((page) => {
      ruta = definirRuta(page);
      return(
        <Link to={ruta} style={{ textDecoration: 'none' }}>
          <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        </Link>
      )
    })}

    //Configuracion de menu desplegable con las opciones de usuario
    const mostrarSettingsUsuario = (settings) => { 
      let ruta;
      return settings.map((setting) => {
        ruta = definirRuta(setting);
        return(
          <Link to={ruta} style={{ textDecoration: 'none' }}>
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center" color={"black"}>{setting}</Typography>
            </MenuItem>
          </Link>
        )
      })

    };



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BlindsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={RUTA_HOME}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ROLLER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {mostrarOpcionesMovil(pages)}
            </Menu>
          </Box>

            <BlindsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={RUTA_HOME}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ROLLER
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {mostrarOpcionesDesktop(pages)}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} fontSize="large">
                <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {mostrarSettingsUsuario(settings)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarResponsive;