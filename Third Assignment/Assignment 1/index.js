async function fetchDataPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

async function fetchDataComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return data;
}

async function fetchDataUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

async function displayData() {
    const dataContainer = document.getElementById('data-container');

    const userData = await fetchDataUsers();
    const usersContainer = createSectionContainer('Users');
    userData.forEach(user => {
        const card = createCard(user.name, user.email + ' - ' + user.phone);
        usersContainer.appendChild(card);
    });
    dataContainer.appendChild(usersContainer);
    
    const postData = await fetchDataPosts();
    const postsContainer = createSectionContainer('Posts');
    postData.forEach(post => {
        const card = createCard(post.title, post.body);
        postsContainer.appendChild(card);
    });
    dataContainer.appendChild(postsContainer);

    const commentData = await fetchDataComments();
    const commentsContainer = createSectionContainer('Comments');
    commentData.forEach(comment => {
        const card = createCard(comment.name, comment.email + ' - ' + comment.body);
        commentsContainer.appendChild(card);
    });
    dataContainer.appendChild(commentsContainer);
}

function createSectionContainer(headerText) {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('section-container');

    const header = document.createElement('h2');
    header.textContent = headerText;
    sectionContainer.appendChild(header);

    return sectionContainer;
}

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
    return card;
}

displayData();
