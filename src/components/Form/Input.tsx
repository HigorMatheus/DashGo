import {
  FormControl,
  FormLabel,
  Input as ChakaraInput,
  InputProps as ChakaraInputProps,
} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakaraInputProps {
  name: string;
  label?: string;
}
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakaraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
