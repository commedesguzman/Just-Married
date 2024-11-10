window.onload = function() {
  function generateMessage() {
      const name1 = document.getElementById("name1").value;
      const name2 = document.getElementById("name2").value;

      // Get the current date information
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'long' });
      const year = currentDate.getFullYear();

      const marriageMessage = `
          <div class="marriage-message">
              <span class="name1"><u><strong>${name1}</strong></u></span> 
              and 
              <span class="name2"><u><strong>${name2}</strong></u></span> <br><br>
              
              Were united in joined in Holy Matrimony <br><br>
              
              On the <u>${day}</u> Day of <u>${month}</u> In the Year <u>${year}</u>
          </div>`;

      document.getElementById("marriageMessage").innerHTML = marriageMessage;

      
      document.getElementById("congratulationsMessage").style.display = "block";
  }
  
  document.getElementById("generateButton").onclick = generateMessage;
}
