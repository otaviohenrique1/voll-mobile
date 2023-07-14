import React from 'react';
import { Image, ScrollView, Text, Divider, Link } from 'native-base';
import { CardConsulta } from '../componentes/CardConsulta';
import { Titulo } from '../componentes/Titulo';
import AvatarFoto from "../assets/avatar2.png";
import { Botao } from '../componentes/Botao';

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar outra consulta</Botao>
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
      <CardConsulta
        foto={AvatarFoto}
        nome="Dra. Ana Lúcia"
        especialidade="Angiologista"
        data="03/03/2023"
        foiAgendado
      />
      <Divider mt={5} />
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
      <CardConsulta
        foto={AvatarFoto}
        nome="Dra. Ana Lúcia"
        especialidade="Angiologista"
        data="03/03/2023"
        foiAtendido
      />
      <CardConsulta
        foto={AvatarFoto}
        nome="Dra. Ana Lúcia"
        especialidade="Angiologista"
        data="03/03/2023"
        foiAtendido
      />
      <CardConsulta
        foto={AvatarFoto}
        nome="Dra. Ana Lúcia"
        especialidade="Angiologista"
        data="03/03/2023"
        foiAtendido
      />
    </ScrollView>
  );
}