import React from "react";
import UserProvider from "./context/Provider";
import App from '../App'
export default function Wrapper(){
  return (
    <UserProvider>
      <App/>
    </UserProvider>
  )
}