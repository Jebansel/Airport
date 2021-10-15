
var passengerOrCrewMember = window.prompt("Are you a Passenger? (Y/N) ")

//try{
//    passengerOrCrewMember = "Y"||"N"
//}
//catch{
  //  passengerOrCrewMember = "y"||"n"
    //window.prompt("Please enter uppercase letters")

//}
if (passengerOrCrewMember=="Y"){
    var nameOfPassenger = window.prompt("Please enter your Name: ")
    var passportNumber = window.prompt("Please enter your Passport Number: ")
    var seatNumber = window.prompt("Please enter your Seat Number: ")
    var weight = window.prompt("Please enter the weight of your bag")
} else{
    var crewMemberName = window.prompt("Please enter your Name: ")
    var position = window.prompt("Please enter your Position: ")
    var staffNumber = window.prompt("Please enter your Staff Number") 
}
module.exports = Main
