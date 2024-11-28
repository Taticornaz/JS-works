function onBtnclick() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    if(!title || !body){
        alert('Please enter values');
        return;
    }
    createPost(title,body)
}


function createPost(title,body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
}

function getAllPosts() {
    const body = document.querySelector('body')
fetch ('https://jsonplaceholder.typicode.com/posts').then((response)=> {
return response.json()
    }).then(posts => {
        posts.forEach((post) => {
            const h1 = document.createElement('h1');
            h1.innerText = post.title;
            const description = document.createElement('span');
            description.innerText = post.body;
            const div = document.createElement('div');
            div.appendChild(h1);
            div.appendChild(description);
            body.appendChild(div);

        })
    })
};

getAllPosts()