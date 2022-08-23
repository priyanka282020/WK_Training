async function getData() {
    const response = await fetch("http://127.0.0.1:5000/");
    const resp = await response.json();
    console.log(resp.message);
    let div_elem = document.createElement("div");
    div_elem.innerHTML = resp.message;
    document.body.appendChild(div_elem);
  }
  

  async function sendData() {
    let patient_id = document.getElementById("p_id").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let url = "http://127.0.0.1:5000/";
    let inputdata = {
      patient_id: patient_id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
    };
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    });
    let respdata = await response.text();
    console.log(respdata);
   
    let elem = document.createElement("div");
    elem.innerHTML = respdata;
    document.body.appendChild(elem);
    
  }
  
  document.querySelector("#getdata").addEventListener("click", getData);
  document.querySelector("#senddata").addEventListener("click", sendData);