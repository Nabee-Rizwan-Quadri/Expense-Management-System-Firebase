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
    }
  });

let category = (e) => {
    console.log('event:', e)

    var calender = new Date()

    const id = 1
    const category = prompt("Enter a category: ")
    const createdOn = calender.toDateString()


    if (!category) {
        return alert('Please enter a category')
    }
    if (!category) {
        swal("Error", "Please enter all the fields", "error");
    } else {
        swal({
            title: "Excellent!",
            text: "You have successfully added a category!",
            icon: "success",
        })
    }


    const categoryData = {
        id,
        category,
        createdOn
    }

    var categorys = localStorage.getItem("allcategorys")
    var parsedcategorys = categorys && JSON.parse(categorys)

    parsedcategorys && parsedcategorys.push(categoryData)
    let categoryDataToStore = parsedcategorys ? parsedcategorys : [categoryData]
    console.log('data to store :', categoryDataToStore);
    localStorage.setItem("allcategorys", JSON.stringify(categoryDataToStore))




}

var categorys = localStorage.getItem("allcategorys")
var parsedcategorys = categorys && JSON.parse(categorys)
console.log(parsedcategorys)

var html = "<table border='1|1' >";
for (var i = 0; i < parsedcategorys.length; i++) {
    html += "<tr>";
    html += "<td>" + parsedcategorys[i].id + "</td>";
    html += "<td>" + parsedcategorys[i].category + "</td>";
    html += "<td>" + parsedcategorys[i].createdOn + "</td>";
    html += "</tr>";
}
html += "</table>";
console.log(html)
document.getElementById("dataShow").innerHTML = html;