import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from "react-query";
import * as yup from 'yup';
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatoria').min(6, 'Minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;
    }, {
        onSuccess: ()=> {
            queryClient.invalidateQueries('users');
        }
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    });
    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values);

        router.push('/users');
    };

    return (
        <Box>
            <Header />

            <Flex
                w='100%'
                maxWidth={1480}
                my='6'
                mx='auto'
                px='6'
            >
                <Sidebar />

                <Box
                    as='form'
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p={['6', '8']}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                type='texta'
                                name='name'
                                label="Nome 
                                completo"
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input
                                type='email'
                                name='email'
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                type='password'
                                name='password'
                                label="Senha"
                                error={errors.password}
                                {...register('password')}
                            />
                            <Input
                                type='password'
                                name='password_confirmation'
                                label="Confirmar senha"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href="/users" passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button isLoading={formState.isSubmitting} type="submit" colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}