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
          <div>
           <form onSubmit = {onSubmitForm}>
              <label htmlFor='usuario'>Usuário:</label>
              <input type='text' id = 'usuario'name='usuario' placeholder='Usuário' required />
              <label htmlFor = 'senha'>Senha:</label>
              <input type='text' id = 'senha' name='senha' required placeholder='Senha'/>
              <input type = 'submit' value="Entrar"/>
           </form>
          </div>
        </DivLogin>
      </Container>
    </>;
}