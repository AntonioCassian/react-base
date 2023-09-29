import React from 'react'
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrap } from './styled'
import * as exampleActions from '../../store/modules/example/actions'
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
      </Title>
    <Paragrap>
      Lorem Impsun
    </Paragrap>
      <button type='button' onClick={handleClick}>
        Enviar
      </button>
    </Container>
  )
}
