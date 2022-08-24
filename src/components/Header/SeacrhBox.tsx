import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

// debounce = evitar chamada enquanto a pessoa estiver digitando;

// 1. Controlled components = controle de componentes atraves de estados;
    // const [search, setSearch] = useState('');
    // input: value={search}
    // input: onChange={event => setSearch(event.target.value)}

// 2. Uncontrolled components = interativa vs declarativa
    // const searchInputRef = useRef<HTMLInputElement>(null);
    // input: ref={searchInputRef}

export function SearchBox() {

    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxWidth={400}
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
        >
            <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'gray.400' }}
            />

            <Icon as={RiSearchLine} fontSize='20' />
        </Flex>
    )
}