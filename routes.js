const express = require('express'),
      roomModel = require('./roomModel'),
    //   roomTypeModel = require('./models/roomtypeModel'),
      controllers  = require('./controller'),
      router = express.Router()

router.route('/rooms-types')
      .post(controllers.addRoomType)
      .get(controllers.getAllRoomTypes)

router.route('/rooms')
      .post(controllers.addRoomRecord)
      .get(controllers.getAllRooms)

router.route('/rooms/:id')
      .get(controllers.getSingleRoom)
      .patch(controllers.updateRoomRecord)
      .delete(controllers.deleteRoomRecord)

module.exports = router;