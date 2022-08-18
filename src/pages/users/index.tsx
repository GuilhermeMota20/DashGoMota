import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function Users() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
                        </Heading>

                        {isWideVersion
                            ?
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                            >
                                Criar novo usuário
                            </Button>

                            :
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
                        }
                    </Flex>

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
                            <Tr>
                                <Td px={['4', '4', '6']}  > <Checkbox colorScheme='pink' /> </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Guilherme Mota</Text>
                                        <Text fontSize='sm' color='gray.300' >motas6617@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>05/07/2022</Td>}

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
                            <Tr>
                                <Td px={['4', '4', '6']}  > <Checkbox colorScheme='pink' /> </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Guilherme Mota</Text>
                                        <Text fontSize='sm' color='gray.300' >motas6617@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>05/07/2022</Td>}

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
                            <Tr>
                                <Td px={['4', '4', '6']}  > <Checkbox colorScheme='pink' /> </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold' >Guilherme Mota</Text>
                                        <Text fontSize='sm' color='gray.300' >motas6617@gmail.com</Text>
                                    </Box>
                                </Td>

                                {isWideVersion && <Td>05/07/2022</Td>}

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
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}