import { Container } from './style';
import { X, Check, Trash } from '@phosphor-icons/react'

interface SucessLoginProps {
    visivel: boolean;
    message?: string;
    status?: 'sucess' | 'error' | 'delete';
}

export default function SucessLogin({visivel = false, message = 'Login Efetuado', status = 'sucess'}: SucessLoginProps) {

    function checkStatus() {
      if (status === 'sucess') 
        return <Check/>

      if (status === 'delete')
        return <Trash/>
      
      return <X/>
    }

    return <>
      {visivel? <Container color={status === 'error'? 'red' : '#90ee90'}>{message}<p>{checkStatus()}</p></Container>: ''}
    </>
    
}