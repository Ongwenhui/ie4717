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
    const domainarray = domains.split(".");
    if ((domainarray.length < 2) || (domainarray.length > 4)) {
      alert("The number of domains must be between two to four!")
      email.focus();
      email.select();
    } else {
      let lastdomainstring = String(domainarray[domainarray.length-1]);
      console.log(lastdomainstring);
      if ((lastdomainstring.length < 2) || (lastdomainstring.length > 3)) {
        alert("The last domain must have two or three characters!");
      }
    }
}

function chkDate(event) {
  var startdate = event.currentTarget.value;
  const realstartdate = new Date(startdate); // Corrected variable name
  const todaysdate = new Date();
  console.log(typeof realstartdate); // Check the type of realstartdate
  console.log(todaysdate);
  if (realstartdate < todaysdate) {
      alert("The start date cannot be before the current date!");
  }
}
    