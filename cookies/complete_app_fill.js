function getCookie(name) {
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}

window.onload = function() {fillFields()};

function fillFields() {
	if(firstname = getCookie("firstname")) $('input[name="firstname"]').val(firstname).change();
  	if(lastname = getCookie("lastname")) $('input[name="lastname"]').val(lastname).change();
  	if(email = getCookie("email")) $('input[name="email"]').val(email).change();
  	if(phone = getCookie("phone")) $('input[name="phone"]').val(phone).change();

	var today = new Date(); 
	var expired = new Date(today.getTime() - 24 * 3600 * 1000); // less 24 hours

	function deleteCookie(name) {
		document.cookie=name + "=null; path=/; expires=" + expired.toGMTString();
	}
	var form = document.getElementsByTagName('form');
		form[0].onsubmit = function() {
			 deleteCookie("firstname");
			deleteCookie("lastname");
			deleteCookie("email"); 
			deleteCookie("phone");
	}
}

