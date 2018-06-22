$(document).ready(function() {
  var resourcesT = {
    "en": {
      "translation": {
        "language": "Language",
        "title": "Converter",
        "subtitle": "Select the currencies, input the amount, click Convert. Easy like this.",
        "cryptocurr": "Crypto currency",
        "fiatcurr": "Fiat currency",
        "usa": "United States of America - USD",
        "brazil": "Brazil - BRL",
        "uk": "United Kingdom - GBP",
        "ue": "European Union - EUR",
        "amount": "Amount",
        "convert": "Convert",
        "copyright": "Made by Leandro Perin de Oliveira",
        "ufsc": "Federal University of Santa Catarina"
      }
    },
    "pt": {
      "translation": {
        "language": "Idioma",
        "title": "Conversor",
        "subtitle": "Selecione as moedas, digite a quantidade, clique Converter. Fácil assim.",
        "cryptocurr": "Criptomoeda",
        "fiatcurr": "Moeda fiduciária",
        "usa": "Estados Unidos da América - DÓLAR",
        "brazil": "Brasil - REAL",
        "uk": "Reino Unido - LIBRA ESTERLINA",
        "ue": "União Européia - EURO",
        "amount": "Quantidade",
        "convert": "Converter",
        "copyright": "Desenvolvido por Leandro Perin de Oliveira",
        "ufsc": "Universidade Federal de Santa Catarina"
      }
    },
    "ar": {
      "translation": {
        "language": "لغة",
        "title": "محول",
        "subtitle": "حدد القطع النقدية ، اكتب الكمية ، انقر فوق تحويل. من السهل من هذا القبيل.",
        "cryptocurr": "عملة معماة",
        "fiatcurr": "عملة ائتمانية",
        "usa": "الولايات المتحدة الأمريكية - الدولار",
        "brazil": "البرازيل - ريال مدريد",
        "uk": "المملكة المتحدة - الجنيه الاسترليني",
        "ue": "الاتحاد الأوروبي - اليورو",
        "amount": "كمية",
        "convert": "تحول",
        "copyright": "وضعت من قبل لياندرو بيرين دي أوليفيرا",
        "ufsc": "جامعة فيدرالية سانتا كاتارينا"
      }
    }
  };

  i18next.init({
    lng: 'en',
    debug: true,
    resources: resourcesT
  }, function(err, t) {
    updateContent();
  });

  function updateContent() {
    $("#language").html(i18next.t('language'));
    $("#title").html(i18next.t('title'));
    $("#subtitle").html(i18next.t('subtitle'));
    $("#cryptocurr").html(i18next.t('cryptocurr'));
    $("#fiatcurr").html(i18next.t('fiatcurr'));
    $("#usa").html(i18next.t('usa'));
    $("#brazil").html(i18next.t('brazil'));
    $("#uk").html(i18next.t('uk'));
    $("#ue").html(i18next.t('ue'));
    $("#amountlbl").html(i18next.t('amount'));
    $("#convert").html(i18next.t('convert'));
    $("#copyright").html(i18next.t('copyright'));
    $("#ufsc").html(i18next.t('ufsc'));
  };

  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  $("#convert").click(function() {
    var crypto = $("#crypto").val();
    var fiat = $("#fiat").val();
    var amount = $("#amount").val();

    $.ajax({url: "https://min-api.cryptocompare.com/data/price?fsym=" + crypto + "&tsyms=" + fiat, success: function(result) {
      if (i18next.language == "ar") {
        $("#result").text(fiat + " " + (result[fiat] * amount).toFixed(2) + " = " + crypto + " " + amount);
      } else {
        $("#result").text(amount + " " + crypto + " = " + (result[fiat] * amount).toFixed(2) + " " + fiat);
      }
    }});

  });

  $("#en_lang").click(function() {
    $("html").attr("lang", "en");

    i18next.changeLanguage('en');
    updateContent();

    $("html").attr("dir", i18next.dir());
    $("#convert").trigger("click");
  });

  $("#pt_lang").click(function() {
    $("html").attr("lang", "pt");

    i18next.changeLanguage('pt');
    updateContent();

    $("html").attr("dir", i18next.dir());
    $("#convert").trigger("click");
  });

  $("#ar_lang").click(function() {
    $("html").attr("lang", "ar");

    i18next.changeLanguage('ar');
    updateContent();

    $("html").attr("dir", i18next.dir());
    $("#convert").trigger("click");
  });

  $("#convert").trigger("click");
});
