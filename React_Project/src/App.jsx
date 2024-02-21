import React from 'react'
import Router from './router/Router'
import Home from './ui/component/pages/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
    <Router/>
    <Home/>
    <ToastContainer/>
    </>
  )
}
