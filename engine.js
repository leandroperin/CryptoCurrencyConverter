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

  $("#en_lang").click(function() {
    $("html").attr("lang", "en");
    $("html").attr("dir", "ltr");
  });

  $("#pt_lang").click(function() {
    $("html").attr("lang", "pt");
    $("html").attr("dir", "ltr");

    $.ajax({url: "i18n/pt.json", success: function(text) {

    }});
  });

  $("#ar_lang").click(function() {
    $("html").attr("lang", "ar");
    $("html").attr("dir", "rtl");
  });

  $("#convert").trigger("click");
});
