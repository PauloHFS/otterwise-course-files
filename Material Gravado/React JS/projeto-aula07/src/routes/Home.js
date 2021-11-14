import styled from 'styled-components'

import Signin from '../components/Signin'
import Signup from '../components/Signup'

function Home() {
  return (
    <Container>
      <Title>Sistema Web</Title>
      <Description>
        Acesso restrito, realize o cadastro ou o login para acessar.
      </Description>
      <FormsContainer>
        <Signin />
        <Signup />
      </FormsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 16px 0px;
`

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`

const FormsContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`

export default Home
