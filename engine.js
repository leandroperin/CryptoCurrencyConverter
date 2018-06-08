$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  $("#convert").click(function() {
    var crypto = $("#crypto").val();
    var fiat = $("#fiat").val();
    var amount = $("#amount").val();

    $.ajax({url: "https://min-api.cryptocompare.com/data/price?fsym=" + crypto + "&tsyms=" + fiat, success: function(result) {
      $("#result").text(amount + " " + crypto + " = " + (result[fiat] * amount).toFixed(2) + " " + fiat);
    }});

  });

  $("#convert").trigger("click");
});
