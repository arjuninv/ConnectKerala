 var accesst;
 document.addEventListener('DOMContentLoaded', function() {
 var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
         	var myArr = JSON.parse(this.responseText);
         	console.log(this.responseText);
 			accesst = myArr.access_token;
         }
    };
    xhttp.open("POST", "https://www.googleapis.com/oauth2/v4/token", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.send('refresh_token=1/e6Es-vrZLI8Ej_P8-UdQEXZH2HjZZzrkseCUDXEAOPI&&client_id=906405353714-t1p93lkuo9h2hpj1fhdbit4u6urlq6dv.apps.googleusercontent.com&&client_secret=e_iTb5e7rt4mfOyLwuiTGEsM&grant_type=refresh_token');

});
 
function classify() {
	var text = document.getElementById("tweet").value;
	var score = document.getElementById("score");

	var result = document.getElementById("result");

	if(text != "") {
 		result.innerHTML = "Loading...";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
         	var myArr = JSON.parse(this.responseText);
         	console.log(this.responseText);
            console.log(myArr.payload[0].displayName);
            if(myArr.payload[0].displayName == "help_offer") {
 			result.innerHTML = "Help Offer";
 			 } else {
 			result.innerHTML = "Help Request";
 		}
 		score.innerHTML = "Confidence = " + myArr.payload[0].classification.score;

         }
    };
    xhttp.open("POST", "  https://automl.googleapis.com/v1beta1/projects/nlp-automl/locations/us-central1/models/TCN8654917547449241794:predict", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + accesst);

    xhttp.send('{"payload" : {"textSnippet": {"content": "' + text.replace(',', '') +'","mime_type": "text/plain"},}}');
}
}