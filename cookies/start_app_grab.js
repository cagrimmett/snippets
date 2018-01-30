window.onload = function() {
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value) {
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

var firstname = $('input[name="firstname"]').val();
var lastname = $('input[name="lastname"]').val();
var email = $('input[name="email"]').val();
var phone = $('input[name="phone"]').val();


    var form = document.getElementsByTagName('form');
    form[0].onsubmit = function() {
        setCookie("firstname", firstname);
    	setCookie("lastname", lastname);
    	setCookie("email", email);
    	setCookie("phone", phone);
    	return true;
    }
}
