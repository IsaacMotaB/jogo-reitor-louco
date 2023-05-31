const firebaseConfig = {
  apiKey: "AIzaSyCDvec2d1ZyStFrho4EPkFmFeeqkQaBSWY",
  authDomain: "ogestorlouco.firebaseapp.com",
  databaseURL: "https://ogestorlouco-default-rtdb.firebaseio.com",
  projectId: "ogestorlouco",
  storageBucket: "ogestorlouco.appspot.com",
  messagingSenderId: "714483640795",
  appId: "1:714483640795:web:699227f4d767fa93d29ffe"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  /*var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");*/

  saveMessages(name, /*emailid, msgContent*/);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, /*emailid, msgContent*/) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    /*emailid: emailid,
    msgContent: msgContent,*/
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
