import { Image, VStack, Box, Checkbox, ScrollView, Text } from 'native-base';
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
        },
      ],
      checkbox: [],
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
        },
      ],
      checkbox: [],
    },
    {
      id: 3,
      titulo: "Para finalizar, qual seu plano de saúde?",
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: "Sulamerica"
        },
        {
          id: 2,
          value: "Unimed"
        },
        {
          id: 3,
          value: "Bradesco"
        },
        {
          id: 4,
          value: "Amil"
        },
        {
          id: 5,
          value: "Biosaúde"
        },
        {
          id: 6,
          value: "Biovida"
        },
        {
          id: 7,
          value: "Outros"
        },
        {
          id: 8,
          value: "Não tenho plano"
        },
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
    <ScrollView
      flex={1}
      p={5}
    >
      <Image
        source={Logo}
        alt="Logo Voll"
        alignSelf="center"
      />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => {
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
      <Box>
        <Text
          color="blue.800"
          fontWeight="bold"
          fontSize="lg"
          mt="2"
          mb="2"
        >Selecione os planos :</Text>
        {secoes[numSecao].checkbox.map((checkbox) => {
          return (
            <Checkbox
              key={checkbox.id}
              value={checkbox.value}
            >{checkbox.value}</Checkbox>
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
        mb={20}
      >Avançar</Botao>
    </ScrollView>
  );
}
