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

export { secoes };