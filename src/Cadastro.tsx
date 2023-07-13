import { Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import Logo from "./assets/Logo.png";
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState<number>(0);

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
