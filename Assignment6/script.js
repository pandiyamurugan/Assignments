function totalcalculation() {
      let currentvalue = document.getElementById("values").value;
      let grade = "";

      if (currentvalue === "") {
        alert("Please enter your score!");
        return;
      }
     if(currentvalue === isNaN(currentvalue)){
      return;
     }
    
      if (currentvalue >= 90) grade = "A";
      else if (currentvalue >= 80) grade = "B";
      else if (currentvalue >= 70) grade = "C";
      else if (currentvalue >= 60) grade = "D";
      else grade = "E";
      
      let buttons = document.querySelectorAll(".gradebtns button");
      buttons.forEach(btn => btn.classList.remove("active"));
      document.getElementById(grade).classList.add("active");

    }