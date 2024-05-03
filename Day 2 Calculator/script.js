let outputScreen = document.getElementById("output-screen");


function display(num) {
  outputScreen.value += num;
}


function formatNumber(number) {
    if (Number.isInteger(number)) {
      return number.toString(); // Trả về số nguyên không rút gọn
    } else {
      return number.toFixed(4); // Rút gọn số với 4 chữ số thập phân
    }
  }
 
  function calculate() {
    try {
      let equation = outputScreen.value;
      equation = equation.replace(/%/g, "*0.01"); // Chuyển đổi % thành *0.01
      let result = eval(equation);
      outputScreen.value = formatNumber(result);
    } catch (err) {
      alert("Biểu thức không hợp lệ!");
    }
  }


function allClear() {
  outputScreen.value = "";
}


function del() {
   // outputScreen.value = outputScreen.value.substring(0, outputScreen.value.length - 1);
  outputScreen.value = outputScreen.value.slice(0, -1);
}


function sin() {
  try {
    let radian = eval(outputScreen.value);
    let result = Math.sin(radian);


        outputScreen.value = result.toFixed(4);
    }
    catch (err) {
      alert("Biểu thức không hợp lệ!");
    }
}

function cos() {
    try {
      let radian = eval(outputScreen.value);
      let result = Math.cos(radian);
  
  
          outputScreen.value = result.toFixed(4);
      }
      catch (err) {
        alert("Biểu thức không hợp lệ!");
      }
  }

  function sqrt() {
    try {
      let number = eval(outputScreen.value);
      let result = Math.sqrt(number);
  outputScreen.value=formatNumber(result);
      }
      catch (err) {
        alert("Biểu thức không hợp lệ!");
      }
  } 
  function square() {
    try {
      let number = eval(outputScreen.value);
      let result = Math.pow(number, 2);
  outputScreen.value=formatNumber(result);
      }
      catch (err) {
        alert("Biểu thức không hợp lệ!");
      }
  }