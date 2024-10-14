

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

if (!username || !title || !content) {
    alert('Please complete all fields before submitting.');
    return;
  }

  const newPost = {
    username: username,
    title: title,
    content: content
  };


  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

 
  existingPosts.push(newPost);

 
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

  


  window.location.href = './blog.html';
});

  
const dark = document.getElementById("dark")
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})