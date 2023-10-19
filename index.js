 // Set the target time in seconds (e.g., 3 minutes and 30 seconds)
 const targetTime = 3 * 60 + 30; // 210 seconds
 let currentTime = targetTime;

 // Function to update the countdown
 function updateCountdown() {
     const countdownElement = document.getElementById("countdown");
     const minutes = Math.floor(currentTime / 60);
     const seconds = currentTime % 60;

     // Format the time as "MM:SS"
     const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
     countdownElement.innerHTML = formattedTime;

     // Visual feedback: Change color as the timer progresses
     if (currentTime <= targetTime / 2) {
         countdownElement.style.color = "orange";
     }
     if (currentTime <= targetTime / 4) {
         countdownElement.style.color = "red";
     }

     // Check if the countdown is complete
     if (currentTime <= 0) {
         countdownElement.innerHTML = "Time's up!";
         clearInterval(timerInterval);
     } else {
         currentTime--;
     }
 }

 // Update the countdown every second
 const timerInterval = setInterval(updateCountdown, 1000);