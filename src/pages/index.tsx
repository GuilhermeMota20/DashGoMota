import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useRouter } from "next/router";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatoria'),
});

export default function Home() {
  const { register, handleSubmit, formState }  = useForm({
    resolver: yupResolver(signInFormSchema)
  }); 

  const router = useRouter();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values)=> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('dataForm:', values);
    await router.push('/dashboard');
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>

          <Input 
            name="email" 
            type='email' 
            label='E-mail' 
            error={errors.email}
            {...register('email')} 
          />

          <Input 
            name="password" 
            type='password' 
            label='Senha' 
            error={errors.password}
            {...register('password')} 
          />

        </Stack>

        <Button type="submit" mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting} >Entrar</Button>
      </Flex>
    </Flex>
  )
}
