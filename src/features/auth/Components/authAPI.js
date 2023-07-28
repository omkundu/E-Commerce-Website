// A mock function to mimic making an async request for data
export function createUser(usersData) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(usersData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("https://solo-project-data.onrender.com/users?email=" + email);
    const data = await response.json();
    console.log(data);
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Wrong credentials" });
      }
    } else {
      reject({ message: "User not found" });
    }
  });
}

export function signOut(usersId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
