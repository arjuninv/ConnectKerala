document.addEventListener("DOMContentLoaded", function() {


load();
});


function load() {
	var choice = document.getElementById("select").value;
	var theDiv = document.getElementById("list");
	theDiv.innerHTML = "";
	var search = " AND col0 CONTAINS ignoring case '" + document.getElementById("search").value + "'";
	switch(choice) {
		case '1': document.getElementById("category").innerHTML = "Help Offers"; var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM 1gKd1T8bUKElusMhQp_ELjuSE_eLbgfQJtNjwE9OD WHERE col2 = 'help_offer'" + search + "&key=AIzaSyARCOsBV8IZkJq-D65aM8Xk_ZcE6gUgGt4"; break;
		case '2': document.getElementById("category").innerHTML = "Help Requests"; var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM 1gKd1T8bUKElusMhQp_ELjuSE_eLbgfQJtNjwE9OD WHERE col2 = 'help_request'" + search + "&key=AIzaSyARCOsBV8IZkJq-D65aM8Xk_ZcE6gUgGt4"; break;
	}

var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var myArr = JSON.parse(this.responseText);
		   	console.log("l = " + myArr.rows.length);
		   	 	for(var i=0; i< myArr.rows.length; i++) {
				theDiv.innerHTML += '<div class="col s12 m7"> <div class="card horizontal hoverable"> <div class="card-image"> <img src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" style="width: 50px;"> </div> <div class="card-stacked"> <div class="card-content"> <p>' + myArr.rows[i][0] + '</p> </div> <div class="card-action"> <a target="_blank"  href="https://twitter.com/search?q=' +  encodeURI(myArr.rows[i][0]).replace('#', "") + '">Search Tweet</a> </div> </div> </div> </div>';
			   	}
		    }

		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();


}