// Back button event
    backBtn.addEventListener('click', () => {
      openHubGame();
    });

    // Redirect to hub_game file
    window.openHubGame = function() {
      window.location.href = 'hub_game.html';
    };