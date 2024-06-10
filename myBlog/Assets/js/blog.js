const back = document.querySelector('#back');



// document.addEventListener('DOMContentLoaded', () => {
//     // Retrieve user object from local storage
//     const user = JSON.parse(localStorage.getItem('user'));
  
//     // Check if user data exists in local storage
//     if (user) {

//         const postedBy = "Posted By: ";
        
//       // Update the blog title and content with the stored data
//       document.getElementById('userName').textContent = postedBy + user.username;
//       document.getElementById('blogTitle').textContent = user.title;
//       document.getElementById('blogContent').textContent = user.content;
//     } else {
//       console.log('No user data found in local storage');
//     }
//   });

// back.addEventListener('click', function (event){
//     event.preventDefault();
//     window.location.href = './index.html';
// });

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve blog posts from local storage
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Select the container where blog posts will be displayed
  const blogContainer = document.getElementById('blogContainer');

  // Check if there are any blog posts
  if (blogPosts.length === 0) {
    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = 'No blog posts available.';
    blogContainer.appendChild(noPostsMessage);
  } else {
    // Create and append blog post elements
    blogPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'card text-bg-light text-dark mb-3';
      postCard.style.maxWidth = '100%';

      const postHeader = document.createElement('div');
      postHeader.className = 'card-header';
      postHeader.textContent = `Posted by: ${post.username}`;
      postCard.appendChild(postHeader);

      const postBody = document.createElement('div');
      postBody.className = 'card-body';

      const postTitle = document.createElement('h5');
      postTitle.className = 'card-title';
      postTitle.textContent = post.title;
      postBody.appendChild(postTitle);

      const postContent = document.createElement('p');
      postContent.className = 'card-text';
      postContent.textContent = post.content;
      postBody.appendChild(postContent);

      postCard.appendChild(postBody);
      blogContainer.appendChild(postCard);
    });
  }
  const latestPostUsername = blogPosts[blogPosts.length - 1].username;
  footerUsername.textContent = `Username: ${latestPostUsername}`;

  // Add event listener to the Back button
  document.getElementById('back').addEventListener('click', () => {
    // Redirect to index.html
    window.location.href = './index.html';
  });
});

const dark = document.getElementById("dark")
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})