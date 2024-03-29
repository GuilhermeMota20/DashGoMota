import { FormControl, FormErrorMessage, FormLabel, Input as ChakaraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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

            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);