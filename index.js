// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function submitData(name, email) {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        debugger;
        const inputName = event.target.children[3].form[0].value;
        const inputEmail = event.target.children[3].form[1].value;
        console.log(inputName);
        console.log(inputEmail);

        const formData = {
            name: inputName,
            email: inputEmail,
        };
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        };
        fetch("http://localhost:3000/users", configurationObject)
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                let jsonResponse = object;
                console.log(jsonResponse);
                const responseElem = document.createElement('p');
                // const responseJson = object.json();
                // console.log(responseJson);
                responseElem.innerText = `New user ${jsonResponse.name} with email ${object.email} added.`;
                document.getElementById('output').append(responseElem);
                return jsonResponse;

            }).catch(function (error) {
                alert("error state reached");
                console.log(error.message);
                const errorElem = document.createElement('p');
                errorElem.innerText = error.message;
                document.getElementById('output').append(errorElem);
            });


                //clean up the form for next use
                document.getElementById('userName').value = "";
                document.getElementById('userEmail').value = "";
            });

    };

    document.addEventListener('DOMContentLoaded', submitData);