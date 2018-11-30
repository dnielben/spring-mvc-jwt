function executeTest() {
    document.getElementById("testResults").innerHTML = "Starting test ...";
    axios({
        method:'post', 
        url:'/login', 
        headers: {'Content-Type': 'application/json'},
        data: {
            "username": "admin",
            "password": "password"
        }
    })
      .then(function (response) {
        // handle success
        console.log("Ok: ");
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("Error: ");
        console.log(error.response.headers);
      })
      .then(function () {
        document.getElementById("testResults").innerHTML = "Test finished ...";
      });
}