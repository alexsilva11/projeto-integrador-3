'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('pet', [{
        id: 1,
        nome: 'Dino Dino',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '9999-9999',
        raca: 'Beagle',
        genero: 'Macho',
        dataCadastro: '2020-05-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 2,
        nome: 'Rex Dino',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 3,
        nome: 'Tim',
        idade: 4,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '3333-3333',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-15',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 4,
        nome: 'Lana',
        idade: 4,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-03',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 5,
        nome: 'Lolita',
        idade: 5,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 6,
        nome: 'Mafalda',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-05-21',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 7,
        nome: 'Flash',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-04-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 8,
        nome: 'Frodo',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-02',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 9,
        nome: 'Sam',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'Porquinho da Índia',
        genero: 'Macho',
        dataCadastro: '2020-06-02',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 10,
        nome: 'Arya',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'Coelho',
        genero: 'Fêmea',
        dataCadastro: '2020-04-25',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 11,
        nome: 'Gohan',
        idade: 0,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-04-21',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 12,
        nome: 'Dobby',
        idade: 0,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Carpa',
        genero: 'Macho',
        dataCadastro: '2020-06-03',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 5,
        usuario_id: 2
      },
      {
        id: 14,
        nome: 'Hobbit',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 15,
        nome: 'Vader',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Siberiano',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 16,
        nome: 'Twins',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 5,
        usuario_id: 2
      },
      {
        id: 17,
        nome: 'GoodBoi',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 18,
        nome: 'Coragem',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 19,
        nome: 'Lady',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 20,
        nome: 'Doguinho',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 21,
        nome: 'PulaPula',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 22,
        nome: 'BatDog',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 23,
        nome: 'Flashdogo',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: false,
        ativo:true,
        dataAdotado: null,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 24,
        nome: 'LilBull',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-05-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-16',
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 25,
        nome: 'Dogria',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-17',
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 26,
        nome: 'ForeverAlone',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-02',
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 27,
        nome: 'Flufly',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-05-28',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-14',
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 28,
        nome: 'Catstein',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-02',
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 29,
        nome: 'Florzinha',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-03',
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 30,
        nome: 'Floco',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-15',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-17',
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 31,
        nome: 'Kratos',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-04-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-11',
        categoria_pet_id: 2,
        usuario_id: 2
      },
      {
        id: 32,
        nome: 'Zé Carioca',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 33,
        nome: 'Carioca',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 34,
        nome: 'Gandalf, o cinza',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-03-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-04-12',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 35,
        nome: 'Pantufa',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-17',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 36,
        nome: 'Larica',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-02',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 37,
        nome: 'Gordinha',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Porquinho da Índia',
        genero: 'Fêmea',
        dataCadastro: '2020-06-03',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-13',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 38,
        nome: 'Ratatoile',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-05-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-25',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 39,
        nome: 'Escondidinho',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-14',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 40,
        nome: 'Nino',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-02',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 41,
        nome: 'Nemo',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-05',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-16',
        categoria_pet_id: 5,
        usuario_id: 2
      },
      {
        id: 42,
        nome: 'Paz',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-13',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-17',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 43,
        nome: 'Páscoa',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Coelho',
        genero: 'Fêmea',
        dataCadastro: '2020-06-04',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 4,
        usuario_id: 2
      },
      {
        id: 45,
        nome: 'Eve',
        idade: 1,
        descricao: "Extraterrestrial Vegetation Evaluator",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Fêmea',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 46,
        nome: 'Wall-e',
        idade: 1,
        descricao: "Waste Allocation Load Filters – Earth Class",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-01',
        adotado: true,
        ativo:true,
        dataAdotado: '2020-06-12',
        categoria_pet_id: 4,
        usuario_id: 2
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('pet', null, {});

  }
};