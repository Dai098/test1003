let result = document.getElementById('result');
let is_calc = false;

function appendToResult(value) {
    result.value += value;
}

//「C」をクリックした時
function clearResult() {
    result.value = '';
}

//数字のキーをクリックした時
function calculateResult(value){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value =="0" && value == "0"){
    result.value = "0";
  }else if(result.value == "0" && value == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = value;
  }else{
    result.value += value;
  }
}

//演算子のキーをクリックした時
function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

//「=」をクリックした時
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

//入力されている値が演算子かそうでないか
function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}