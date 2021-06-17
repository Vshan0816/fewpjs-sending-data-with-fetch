// Add your code here
function submitData(name,email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    };
    return fetch("http://localhost:3000/users", configObj) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.body.append(data.id)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.append(error.message);
      })

}