// profile.js

function showContent(contentId) {
    // Hide all content blocks
    var contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(function(block) {
      block.classList.remove('active');
    });
  
    // Show the selected content block with a fade-in animation
    var selectedContent = document.getElementById(contentId + '-content');
    selectedContent.classList.add('active');
  }
  
  function follow() {
    // Implement follow functionality here
    alert("You are now following @captain6!");
  }
  
  async function shareAction() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this profile!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert("Web Share API not supported in this browser.");
    }
  }
  