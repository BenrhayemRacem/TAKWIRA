const express = require("express");
const  router = express.Router();
const reservationController = require("../controllers/reservation.controller")
const jwtHandling = require("../services/jwtHandling");
const UserType = require("../enums/userTypes");
const reservationGuard = require("../guards/reservation.guard")
const ownerAndOwnerRequestGuard = require("../guards/ownerAndRequestOwner.guard");


router.post("/add" ,[jwtHandling.jwtVerify([UserType.Client]),reservationGuard], reservationController.add)
router.get("/getForField/:fieldId/:date" , reservationController.getFieldReservation)
router.get("/free/:fieldId/:date" , reservationController.giveAvailableReservation)
router.delete("/:id" , reservationController.deleteReservation)
router.get("/client" ,[jwtHandling.jwtVerify([UserType.Client]),reservationGuard],reservationController.getClientReservations)
router.get("/owner",[jwtHandling.jwtVerify([UserType.Owner,UserType.OwnerRequest]),ownerAndOwnerRequestGuard],reservationController.getReservationForOwner)
module.exports = router ;