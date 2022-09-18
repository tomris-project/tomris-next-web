
import 'bootstrap/dist/css/bootstrap.min.css';
import "flatpickr/dist/themes/light.css";
import "../styles/dragdrop.css";

import Head from 'next/head' 
import { useRouter } from 'next/router';

import App from 'next/app';
import {  WebApi } from 'tomris-web-api'; 
/**
 * Web Api Project any other project include Start Page
 */
WebApi.MyApp.DATA.App=App;
WebApi.MyApp.DATA.Head=Head;
WebApi.MyApp.DATA.useRouter=useRouter;  
export default WebApi.MyApp.App;