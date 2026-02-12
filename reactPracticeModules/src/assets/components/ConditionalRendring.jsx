const ConditonalRendering =()=>{

    // taking input from user and converting it into int from string 
        const number = parseInt(prompt("Enter a nummber between 20 to 80"));

        // conditonal statement used and output represented accordin to input 
        if(number >=80 || number<=20)
            return<h1>Number not in Range </h1>

        else
            return<h1>Number is in Range</h1>
   
}

export default ConditonalRendering;
