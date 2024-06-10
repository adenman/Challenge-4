const back = document.querySelector('#back');


document.addEventListener('DOMContentLoaded', () => {
 
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  
  const blogContainer = document.getElementById('blogContainer');

 
  if (blogPosts.length === 0) {
    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = 'No blog posts available.';
    blogContainer.appendChild(noPostsMessage);
  } else {
   
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

  document.getElementById('back').addEventListener('click', () => {
    
    window.location.href = './index.html';
  });
});

const dark = document.getElementById("dark")
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})