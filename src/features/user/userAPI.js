// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://solo-project-data.onrender.com/?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updatedUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
