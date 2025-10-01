async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const dataContainer = document.getElementById("api-data");

try {
    //Fetch Data Using try-catch
    const response = await fetch(apiUrl); // Get data from the API
    const users = await response.json();  // Convert response to JSON

   // Clear the Loading Message
    dataContainer.innerHTML = '';

    //Create and Append User List
    const userList = document.createElement('ul'); // Create <ul>

    users.forEach(user => {
      const listItem = document.createElement('li'); // Create <li>
      listItem.textContent = user.name;              // Set text to user's name
      userList.appendChild(listItem);                // Append <li> to <ul>
    });

    dataContainer.appendChild(userList); // Append the <ul> to the container

  } catch (error) {
    // Handle errors if the request fails
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching data:", error);
  }
}
//Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);