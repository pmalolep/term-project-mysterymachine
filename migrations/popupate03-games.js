module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'games', [
      // {game_status: "IN PROGRESS", host_id: 1, turn_order: -1, active_seat: 1, game_start: new Date(), top_card_id:10},
      {game_status: "OPEN", host_id: 2},
      {game_status: "OPEN", host_id: 1},
      {game_status: "OPEN", host_id: 3},
    ], {});
  },
  down: (queryInterface, Sequelize) => {

  }
};
