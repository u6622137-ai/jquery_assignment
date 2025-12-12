// jQuery validation
$(document).ready(function () {
  $("#registerForm").on("submit", function (e) {
    e.preventDefault(); // stop real submit (for demo)

    // Clear previous errors
    clearErrors();

    let isValid = true;

    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirmPassword").val().trim();

    // 1. Empty checks for username, email, password, confirmed password
    if (username === "") {
      setFieldError("#username", "#username-error", "this filed must not be empty");
      isValid = false;
    }

    if (email === "") {
      setFieldError("#email", "#email-error", "this filed must not be empty");
      isValid = false;
    }

    if (password === "") {
      setFieldError("#password", "#password-error", "this filed must not be empty");
      isValid = false;
    }

    if (confirmPassword === "") {
      setFieldError("#confirmPassword", "#confirmPassword-error", "this filed must not be empty");
      isValid = false;
    }

    // 2. Interesting Topics: at least one must be checked
    const topicsChecked = $("input[name='topics']:checked").length;
    if (topicsChecked === 0) {
      $("#topics-error").text("At least one topic must be selected");
      isValid = false;
    }

    // 3. Gender: must not be the first option "—"
    const gender = $("#gender").val();
    if (gender === "") {
      $("#gender-error").text("please choose your gender");
      isValid = false;
    }

    // 4. Confirm password must match password (on submit)
    if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
      setFieldError(
        "#confirmPassword",
        "#confirmPassword-error",
        "confirmed password mismatched the password"
      );
      isValid = false;
    }

    if (isValid) {
      // In real assignment you can allow form submit here
      alert("Form submitted successfully!");
      // this.submit();   // uncomment if you want real submission
    }
  });

  // helper: clear all previous error styles & messages
  function clearErrors() {
    $("input, select").removeClass("input-error");
    $(".error-msg").text("");
    $(".inline-error").text("");
  }

  // helper: set error for a specific field (border + message)
  function setFieldError(inputSelector, errorSelector, message) {
    $(inputSelector).addClass("input-error");
    $(errorSelector).text(message);
  }
});
