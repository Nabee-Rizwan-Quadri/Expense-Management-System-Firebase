var db = firebase.firestore();

//for session on bottom

let login = (e) => {
    console.log('event:', e)
    e.preventDefault()

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    if (!email || !password) {
        return alert('Please enter all the fields')
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
        swal({
            title: "AWESOME!",
            text: "You have successfully logged in!",
            icon: "success",
        }).then((value) => {
            location.href = '../../dashboard/dashboard.html'
        });
  })
  
  .catch((error) => {
    var errorMessage = error.message;
    swal("ERROR", errorMessage, "error");
  });

}

//for session
const user = firebase.auth().currentUser;
if (user !== null) {
  location.href = '../../dashboard/dashboard.html'
}