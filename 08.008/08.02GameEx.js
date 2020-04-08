function calculateProfit() {
    // Read value of rounds from the input field
    var pips, rounds, wins, i, profit;
    pips = Math.round( (Math.random() * 5) + 1 );
    rounds = document.getElementById("rounds").value;
    wins = 0;
    i = 0;

    // Make a loop which is executed as many times as was set through the input field. 
    while (i < rounds) {
        
        pips = Math.round( (Math.random() * 5) + 1 );
    
    // Let win counter cumulating during every round of the loop. 
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        
        

        // If the randomized pips is 1, 3 or 5,  no pay
        if (pips == 1 || pips == 3 || pips == 5) {
			wins = wins + 0;
        }
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
		else if (pips == 2 || pips == 4 ) {
			wins = wins + 1.25;
        }
         // Otherwise the pips 6 returns the inserted bet 150%
		else if (pips == 6) {
			wins = wins + 1.5;
        }
        i++;
    }
       profit = rounds - wins;
       

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   

    // Write the answer on the page, to the answer div, as content of the div
   
    document.getElementById("answer").innerHTML= "Bets were altogether " + (rounds*1).toFixed(2) + " euros" + "<br>" + "Wins were " + (wins*1).toFixed(2) + " euros" + "<br>" + " Profits was " + (profit*1).toFixed(2)+ " euros"
}