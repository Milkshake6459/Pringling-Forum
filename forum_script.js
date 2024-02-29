// Function to generate forum thread HTML
function generateForumThread(forumThread) {
  console.log("Forum Thread Generating..."
  var forumContainer = document.getElementById('forum-container');
  
  forumThread.forum_posts.forEach(function(post) {
    var postHTML = `
      <div class="forum-post">
        <div class="post-info">
          <img class="profile-picture" src="${post.user_info.profile_picture}" alt="${post.user_info.user_name} Profile Picture">
          <h2>${post.user_info.user_name}</h2>
          <p>${post.post_date}</p>
        </div>
        <div class="post-content">
          <h3>${post.post_title}</h3>
          <p>${post.post_content}</p>
        </div>
      </div>
    `;
    forumContainer.innerHTML += postHTML;
  });
}

// Call the function to generate forum thread HTML
generateForumThread(forumThread);
