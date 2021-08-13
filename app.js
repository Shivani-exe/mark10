var billAmount=document.querySelector(".bill-amount");
var cashGiven=document.querySelector('.cash-given');
var btnCheck=document.querySelector('#btn-check')
var totalNotes=[2000,500,100,20,10,5,1];
var outputText=document.querySelector('#output-text');
var numberOfNotes=document.querySelectorAll(".note-in-pocket");
var btnCheck=document.querySelector("#btn-check");



function calculate(amountToBeReturned)
{
    
    

    for(var i=0;i<totalNotes.length;i++)
    {  
        var noOfNotes=Math.trunc(amountToBeReturned/totalNotes[i]);
        amountToBeReturned%=totalNotes[i];
        numberOfNotes[i].innerText=noOfNotes;

    }
}
function onClickHandler()
{
   
    if(billAmount.value!== '')
    {
        if(billAmount.value > 0)
        {
            
            if(Number(cashGiven.value) >= Number(billAmount.value))
            {
                
                var amountToBeReturned=cashGiven.value-billAmount.value;
                calculate(amountToBeReturned);
                outputText.innerText= "Here is your return!😀";
            }
            else 
            {
                outputText.innerText="Do you want to wash utensils?😏";
            }
        }
        else{
            outputText.innerText= "Invalid Bill Amount😑";
        }
    }
    else
    {
            outputText.innerText= "Please enter Bill Amount😑";
    }

}


btnCheck.addEventListener('click',onClickHandler);