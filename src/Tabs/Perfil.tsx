import React from 'react';
import { Avatar, VStack, Text, Divider, ScrollView } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import AvatarFoto from "../assets/avatar.png";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo>Meu perfil</Titulo>
        <Avatar
          size="xl"
          source={AvatarFoto}
          mt={5}
        />
        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Joana Magalhães Souza</Titulo>
        <Text>28/05/1990</Text>
        <Text>São Paulo - SP</Text>
        <Divider mt={5}/>
        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}