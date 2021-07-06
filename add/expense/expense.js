//for session
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      location.href = '../../auth-screens/login/login.html'
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

let expense = (e) => {
    console.log('event:', e)
    e.preventDefault()

    var calender = new Date()

    const id = 1
    const discription = document.getElementById('discription').value
    const amount = document.getElementById('amount').value
    const category = document.getElementById('category').value
    const createdOn = calender.toDateString()
    const action = "Allah behtar janta hai"


    if (!discription || !amount || !category) {
        swal("Error", "Please enter all the fields", "error");
    } else {
        swal({
            title: "Excellent!",
            text: "You have successfully added a expense!",
            icon: "success",
        })
    }

    const expenseData = {
        id,
        discription,
        amount,
        category,
        createdOn,
        action
    }

    var expenses = localStorage.getItem("allexpenses")
    var parsedexpenses = expenses && JSON.parse(expenses)

    parsedexpenses && parsedexpenses.push(expenseData)
    let expenseDataToStore = parsedexpenses ? parsedexpenses : [expenseData]
    console.log('data to store :', expenseDataToStore);
    localStorage.setItem("allexpenses", JSON.stringify(expenseDataToStore))
}