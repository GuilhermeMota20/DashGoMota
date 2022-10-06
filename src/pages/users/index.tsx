import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function Users() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

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
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p={['6', '8']}
                >
                    <Flex
                        mb='8'
                        justify='space-between'
                        align='center'
                    >
                        <Heading
                            size='lg'
                            fontWeight='normal'
                        >
                            Usuários

                            {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
                        </Heading>

                        {isWideVersion
                            ?
                            <Link href="/users/create" passHref>
                                <Button
                                    as='a'
                                    size='sm'
                                    fontSize='sm'
                                    colorScheme='pink'
                                    leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                >
                                    Criar novo usuário
                                </Button>
                            </Link>

                            :
                            <Link href="/users/create" passHref>
                                <Tooltip label='Criar novo usuário'>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='pink'
                                        leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                        iconSpacing={0}
                                    ></Button>
                                </Tooltip>
                            </Link>
                        }
                    </Flex>

                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Ocorreu um erro ao obter os dados de usuarios.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme='whiteAlpha'>
                                <Thead>
                                    <Tr>
                                        <Th px={['4', '4', '6']} color='gray.300' w='8' >
                                            <Checkbox colorScheme='pink' />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th w='8'></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={['4', '4', '6']}  > <Checkbox colorScheme='pink' /> </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight='bold' >{user.name}</Text>
                                                        <Text fontSize='sm' color='gray.300' >{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>{user.created_at}</Td>}

                                                <Td>
                                                    {isWideVersion
                                                        ?
                                                        <Button
                                                            as='a'
                                                            size='sm'
                                                            fontSize='sm'
                                                            colorScheme='purple'
                                                            leftIcon={<Icon as={RiPencilLine} marginEnd='0' fontSize='16' />}
                                                        >
                                                            Editar
                                                        </Button>

                                                        :
                                                        <Tooltip label='Editar usuário'>
                                                            <Button
                                                                as='a'
                                                                size='sm'
                                                                fontSize='sm'
                                                                colorScheme='purple'
                                                                leftIcon={<Icon as={RiPencilLine} marginEnd='0' fontSize='16' />}
                                                                iconSpacing={0}
                                                            ></Button>
                                                        </Tooltip>
                                                    }
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>

                            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}