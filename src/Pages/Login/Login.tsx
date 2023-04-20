import React, { FormEventHandler } from "react";
import { DivImg, Container, DivLogin } from "./style";


export default function Login() {

    function onSubmitForm(){ 
      event?.preventDefault();
    }

    return <>
      <Container>
        <DivImg/>
        <DivLogin>
           <form onSubmit = {onSubmitForm}>
              <label htmlFor='usuario'>Usuário:</label>
              <input type='text' id = 'usuario'name='usuario' required/>
              <label htmlFor = 'senha'>Senha:</label>
              <input type='text' id = 'senha' name='senha' required/>
              <input type = 'submit' value="Entrar"/>
           </form>
        </DivLogin>
      </Container>
    </>;
}