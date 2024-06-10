// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('userForm');
    
//     submit.addEventListener('click', function (event) {
//       event.preventDefault();
      
 
//       const username = document.getElementById('username').value;
//       const title = document.getElementById('title').value;
//       const content = document.getElementById('content').value;
      
     
//       const user = {
//         username: username,
//         title: title,
//         content: content
//       };
  
      
//       localStorage.setItem('user', JSON.stringify(user));
      
//       window.location.href = './blog.html';
      
      
//     });
//   });

//   back.addEventListener('click', function (event){
//     event.preventDefault();
//     window.location.href = './index.html';
// });

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

  // Retrieve existing posts from local storage
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Add the new post to the existing posts
  existingPosts.push(newPost);

  // Save the updated posts array back to local storage
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

  

  // Redirect to blog.html
  window.location.href = './blog.html';
});

  
const dark = document.getElementById("dark")
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})