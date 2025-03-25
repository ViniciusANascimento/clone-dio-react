import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { MdEmail, MdLock, MdOutlinePermIdentity } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper } from './styles';


const SignUp = () => {

  const navigate = useNavigate()

  const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (formData) => {
   try {
      const { data } = await api.post('users', formData)
      alert('Usuário cadastrado com sucesso!')
      navigate('/login')
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar o usuário')
      }
    }
  };
  return (
    <>
      <Header 
        onClickSignIn={() => {navigate ('/login')}}
      />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome Completo"
                  leftIcon={<MdOutlinePermIdentity />}
                  name="name"
                  control={control} />
                {errors.email && <span>Nome é campo obrigatório</span>}
                <Input placeholder="E-mail"
                  leftIcon={<MdEmail />}
                  name="email"
                  control={control}/>
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock />}
                  name="senha"
                  control={control} />
                {errors.senha && <span>Senha é obrigatório</span>}
                <Button title="Criar minha conta" variant="secondary" type="submit"/>
              </form>
              <Row>
                <CriarText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CriarText>
              </Row>
              <Row>
                  <CriarText>Já possui uma conta?</CriarText>
                  <CriarText href='/login'>Acessar Conta</CriarText>
              </Row>
            </Wrapper>
            </Column>
      </Container>
    </>
  )
}

export { SignUp }