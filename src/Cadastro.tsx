import { Image, VStack, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState<number>(0);

  const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos:",
      entradaTexto: [
        {
          id: 1,
          label:"Nome",
          placeholder:"Digite seu nome completo",
          secureTextEntry: false,
        },
        {
          id: 2,
          label:"Email",
          placeholder:"Insira seu endereço de email",
          secureTextEntry: false,
        },
        {
          id: 3,
          label:"Senha",
          placeholder:"Insira sua senha",
          secureTextEntry: true,
        },
        {
          id: 4,
          label:"Repita a senha",
          placeholder:"Insira sua senha",
          secureTextEntry: true,
        }
      ]
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você:",
      entradaTexto: [
        {
          id: 1,
          label:"CEP",
          placeholder:"Insira seu CEP",
          secureTextEntry: false,
        },
        {
          id: 2,
          label:"Endereço",
          placeholder:"Insira seu endereço",
          secureTextEntry: false,
        },
        {
          id: 3,
          label:"Número",
          placeholder:"Insira seu número",
          secureTextEntry: false,
        },
        {
          id: 4,
          label:"Complemento",
          placeholder:"Insira seu complemento",
          secureTextEntry: false,
        },
        {
          id: 5,
          label:"Telefone",
          placeholder:"(00) 00000-0000",
          secureTextEntry: false,
        }
      ]
    }
  ];

  function avancarFuncao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarFuncao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      p={5}
    >
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              secureTextEntry={entrada.secureTextEntry}
            />
          );
        })}
      </Box>
      {numSecao > 0 && <Botao
        bgColor="gray.400"
        onPress={() => voltarFuncao()}
      >Voltar</Botao>}
      <Botao
        onPress={() => avancarFuncao()}
        mt={4}
      >Avançar</Botao>
    </VStack>
  );
}
