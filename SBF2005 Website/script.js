function enterSite() {
  // Create loading screen with space background
  document.body.innerHTML = `
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div id="loading-screen">
          <div id="loading-text">ENTERING ORBIT...</div>
      </div>
  `;
  
  // Floating and glowing effects are handled by CSS animations
  
  setTimeout(() => {
      window.location.href = 'second_layer/shop.html';
  }, 2000);
}