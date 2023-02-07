
window.onload = function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let regNo = params.regNo; // "some_value"
  if (regNo) {
    test(regNo);
  }
}

async function getRegistrationData(regNo) {
  const response = await fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", {
    method: 'POST',
    headers: {
      'x-api-key': 'p8RCmO5r2l1JwiHIdbjao9In8f6uRltP6C1jEIfR',
      'Content-Type': 'application/json'
    },
    body: `{
      "registrationNumber": "TE57VRN"
  }`,
  });

  response.json().then(data => {
    console.log(data);
  });
}

function test() {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles");
  xhr.setRequestHeader('x-api-key', 'p8RCmO5r2l1JwiHIdbjao9In8f6uRltP6C1jEIfR');
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  let data = `{
    "registrationNumber": "TE57VRN"
}`;

  xhr.send(data);
}


