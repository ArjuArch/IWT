function calcBMI() {
    let ht = document.getElementById("height");
    let h = parseFloat(ht.value);
    let wt = document.getElementById("weight");
    let w = parseFloat(wt.value);
    let c = document.getElementById("conclusion");
    let r = document.getElementById("result");
    let s = "";
    let bmi = w / (h * 0.01 * (h * 0.01));
    if (isNaN(h) || isNaN(w)) {
      c.innerHTML = "Enter valid data...";
      return;
    }
    if (bmi < 18.5) {
      s = "Underweight";
    } else if (bmi < 24.9) {
      s = "Normal";
    } else if (bmi < 29.9) {
      s = "Overweight";
    } else {
      s = "Obese";
    }
    c.innerHTML = "Your BMI is " + bmi.toFixed(2) + "(" + s + ")";
    r.value = bmi.toFixed(2);
  }