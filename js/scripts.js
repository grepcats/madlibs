$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var vehicleInput= $("input#vehicle").val();
    var numberInput = $("input#number").val();
    var verbInput = $("input#verb").val();
    var professionInput = $("input#profession").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".vehicle").text(vehicleInput);
    $(".number").text(numberInput);
    $(".verb").text(verbInput);
    $(".profession").text(professionInput);

    $("#story").show();

    event.preventDefault();
  });
});
