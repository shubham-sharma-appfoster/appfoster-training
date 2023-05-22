const nameList = document.getElementById('nameList');
const personDetails = document.getElementById('postDetails');
const personName = document.getElementById('username');

// Fetch names from API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Display names
        data.forEach(person => {
            const div = document.createElement('div')
            const name = document.createElement('h5');
            const btn = document.createElement('button');
            btn.setAttribute('data-bs-target', '#postModal');
            btn.setAttribute('data-bs-toggle', 'modal');
            btn.setAttribute('type', 'button');
            btn.setAttribute('class', 'btn btn-primary');
            div.classList.add("d-flex");
            div.classList.add("justify-content-between");


            btn.innerHTML = "Show Posts"
            name.textContent = person.name;
            btn.addEventListener('click', () => fetchPersonDetails(person.id, person.name));
            div.appendChild(name);
            div.appendChild(btn);
            nameList.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));

// Fetch posts by ID
function fetchPersonDetails(userId, personName) {

    // Clear previous details
    personDetails.innerHTML = '';


    const username = document.getElementById('username');
    username.innerHTML = personName;


    // Fetch posts from API
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(person => {
            person.map(insert)
        })
        // Display posts
        .catch(error => console.error('Error:', error));
    function insert(item) {
        const details = document.createElement('div');

        details.innerHTML = `
        <div class="content">
        <p><b>Title:</b> ${item.title}</p>
        <p><b>Body:</b> ${item.body}</p>
        </div>
      `;
        personDetails.appendChild(details);
    }
}
