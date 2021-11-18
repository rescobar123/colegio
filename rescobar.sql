-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-11-2021 a las 01:50:43
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rescobar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

DROP TABLE IF EXISTS `actividad`;
CREATE TABLE IF NOT EXISTS `actividad` (
  `idActividad` int(11) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `idGrado` int(3) NOT NULL,
  `idCurso` int(3) NOT NULL,
  `idDocente` int(4) NOT NULL,
  `tituloTarea` varchar(30) NOT NULL,
  `fechaDeEntrega` datetime NOT NULL,
  `documentoAdjunto` longtext NOT NULL,
  `instrucciones` longtext NOT NULL,
  `punteo` int(11) NOT NULL,
  `fechaCreacion` datetime(2) NOT NULL,
  `estado` varchar(10) NOT NULL,
  PRIMARY KEY (`idActividad`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `idAlumno` int(6) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `codigoAlumno` varchar(25) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `celular` int(8) NOT NULL,
  `estado` int(1) NOT NULL,
  `observacion` varchar(50) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `fotografia` longtext NOT NULL,
  `fechaNacimiento` date NOT NULL,
  PRIMARY KEY (`idAlumno`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnosgrado`
--

DROP TABLE IF EXISTS `alumnosgrado`;
CREATE TABLE IF NOT EXISTS `alumnosgrado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alumnosPorComa` varchar(500) NOT NULL,
  `idGrado` int(3) NOT NULL,
  `anio` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centroeducativo`
--

DROP TABLE IF EXISTS `centroeducativo`;
CREATE TABLE IF NOT EXISTS `centroeducativo` (
  `idCentroEducativo` int(4) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `ubicacion` varchar(150) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `cantidadAlumnos` int(5) NOT NULL,
  `pagoAlumno` int(2) NOT NULL,
  `reponsable` varchar(50) NOT NULL,
  `telefonoResponsable` varchar(30) NOT NULL,
  PRIMARY KEY (`idCentroEducativo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `idCurso` int(3) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `nombreCurso` varchar(50) NOT NULL,
  `nivel` varchar(10) NOT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursogrado`
--

DROP TABLE IF EXISTS `cursogrado`;
CREATE TABLE IF NOT EXISTS `cursogrado` (
  `idCurso` int(11) NOT NULL AUTO_INCREMENT,
  `cursoPorComa` varchar(150) NOT NULL,
  `idGrado` int(3) NOT NULL,
  `anio` int(4) NOT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

DROP TABLE IF EXISTS `docente`;
CREATE TABLE IF NOT EXISTS `docente` (
  `idDocente` int(4) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `nombreCompleto` varchar(60) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` int(8) NOT NULL,
  `escolaridad` varchar(100) NOT NULL,
  PRIMARY KEY (`idDocente`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

DROP TABLE IF EXISTS `grado`;
CREATE TABLE IF NOT EXISTS `grado` (
  `idGrado` int(3) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `nivel` varchar(10) NOT NULL,
  PRIMARY KEY (`idGrado`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripcion`
--

DROP TABLE IF EXISTS `inscripcion`;
CREATE TABLE IF NOT EXISTS `inscripcion` (
  `idInscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `idCentroEducativo` int(4) NOT NULL,
  `idAlumno` int(6) NOT NULL,
  `idGrado` int(3) NOT NULL,
  `anioEscolar` int(4) NOT NULL,
  PRIMARY KEY (`idInscripcion`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
