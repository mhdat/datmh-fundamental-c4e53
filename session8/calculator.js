const historyValue = document.getElementById("history-value")
const result = document.getElementById("output-value")
const buttonOperator = document.getElementsByClassName("operator")
const number = document.getElementsByClassName("num")

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
function getHistory(){
	return historyValue.value;
}
function printHistory(num){
	historyValue.value=num;
}
function getOutput(){
	return result.value;
}
function printOutput(num){
	if(num==""){
		result.value=num;
	}
	else{
		result.value=getFormattedNumber(num);
	}	
}

for(let i = 0;i<buttonOperator.length; i++){
	buttonOperator[i].addEventListener('click',() => {
        if(this.id=="clear"){
			printHistory("");
			printOutput("");
        } else {
            let output=getOutput();
			let history=getHistory();
			if(output == "" && history != "") {
				if(isNaN(history[history.length-1])) {
					history= history.substr(0,history.length-1);
				}
            } 
            if (output!="" || history!="") {
				output = reverseNumberFormat(output);
				history += output;
				if(this.id == "="){
					let finalResult= eval(history);
					printOutput(finalResult);
					printHistory("");
				} else {
					history += this.id;
					printHistory(history);
					printOutput("");
                }
            }
        }
    })
}

for(let i =0;i < number.length; i++){   
	number[i].addEventListener('click', () => {
		let output=reverseNumberFormat(getOutput());
		if(output == Number()) { 
			output += this.id;
			printOutput(output);
		}
	})
}