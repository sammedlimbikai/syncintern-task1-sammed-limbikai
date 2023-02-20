$(document).ready(function() {
	$("#login-form").submit(function(event) {
		event.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		$.post("sam.php", { username: username, password: password }, function(data) {
			if (data.trim() == "Invalid username or password.") {
				$("#message").text(data);
			} else {
				window.location.href = data.trim();
			}
		});
	});
});
