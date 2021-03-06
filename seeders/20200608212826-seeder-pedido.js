"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pedido",
      [
        {
          id:1,
          data:'2020-04-11',
          usuario_id: 1
        },
        {
          id:2,
          data:'2020-05-01',
          usuario_id:1
        },
        {
          id:3,
          data: '2020-05-12',
          usuario_id: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('pedido', null, {});
  
  },
};
