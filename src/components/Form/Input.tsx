import { FormControl, FormLabel, Input as ChakaraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakaraInput
                name={name}
                id={name}
                type='password'
                focusBorderColor="pink.500"
                bg='gray.900'
                variant='filled'
                autoComplete="off"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size='lg'
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);