function chkName(event) {

    // Get the target node of the event
    
      var myName = event.currentTarget;
    
    // Test the format of the input name 
    //  Allow the spaces after the commas to be optional
    //  Allow the period after the initial to be optional
    
      // ^ - start, [A-Z] - one uppercase, [a-z]+ - one or more lowercase,
      // , - one comma,  ? - zero or one space
      // [A-Z] - one uppercase, [a-z]+ - one or more lowercase, ? - zero or one space
      // [A-Z] - one uppercase, \. - one full stop, $ - end
      // search returns position of matched sequence, i.e. position 0 --> start of name string
      // search returns -1 if no match is found.
      // E.g. Riker, Will T.
      var pos = myName.value.search(/^[A-Za-z\s]+$/);
    //   var regexPattern = /^[a-z][a-z\s]*$/;
    //   if (regexPattern.test(myName)) {alert("yes")} else {alert("hi")}
      if (pos != 0) {
        alert("The name you've entered contains invalid characters! \n" +
        "Your name should only contain alphabets and spaces.");
        myName.focus();  // init textbox has cursor focused on it
        myName.select(); // init textbox has text being selected
        return false;	 // stay on same page
      } 
    }

function chkEmail(event) {
    var email = event.currentTarget;
    console.log(event.currentTarget.value);
    var pos = email.value.search(/^[A-Za-z.-]+@[A-Za-z.]+$/)
    if (pos != 0) {
      alert("The email you've entered is invalid!")
      email.focus();
      email.select();
      return false;
    }
    let emailstring = event.currentTarget.value;
    console.log(typeof emailstring);
    const emailarray = emailstring.split("@");
    let domains = String(emailarray[1]);
    console.log(domains);
    // var emailstring = String(email);
    // if (emailstring.includes("\@") === false) {
    //     alert("You email must contain an @ sign!");
    //     email.focus();
    //     email.select();
    //     return false;
    // }
    // else {
    //     const emailarray = emailstring.split("\@");
    //     var username = emailarray[0];
    //     var domain = emailarray[1];
    //     var usernamepos = username.value.search(/^[A-Za-z\.\-]+$/)
    //     if (usernamepos != 0) {
    //       alert("Your username should only contain alphabets, periods and hyphens")
    //     }
    // }
}
    
