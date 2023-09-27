var nameNode = document.getElementById("jname");
var emailNode = document.getElementById("jemail");
var dateNode = document.getElementById("startdate");
nameNode.addEventListener("change", chkName, false);
emailNode.addEventListener("change", chkEmail, false);
dateNode.addEventListener("input", chkDate, false);