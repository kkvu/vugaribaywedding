function subscribe() {
  var field1 = $("#Name").val();
  var field2 = $("#Email").val();

  console.log(field1, field2);

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdTj3zmLM6flbsF1U4wi-70x6LnDrCpiEuyiLyOT60WBQyzfg/formResponse?&submit=Submit?usp=pp_url&",

    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.1064657779": field1,
      "entry.1876428971": field2
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      // document.getElementById('myemailform').reset()
      // $('#myemailform')[0].reset();

      console.log(field1, field2);
    },
    error: function (x, y, z) {

      console.log("boo");
      // $('#myemailform').trigger('reset');
    }
  });
  return false;
}


function contactUs() {
  var field1 = $("#ContactName").val();
  var field2 = $("#Message").val();

  console.log(field1, field2);

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfyFq-_qh0zmLBAAnf9qAaHOiW1Z00kQ3442yVhmqoOa0sPoQ/formResponse?&submit=Submit?usp=pp_url&",

    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.805164722": field1,
      "entry.244595963": field2
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      // document.getElementById('myemailform').reset()
      // $('#contact')[0].reset();

      console.log(field1, field2);
    },
    error: function (x, y, z) {

      console.log("boo");
      // $('#myemailform').trigger('reset');
    }
  });
  return false;
}