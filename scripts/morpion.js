$.fn.morpion = function(){
    $('#replay').click(function(){
        $("#grid").removeClass('won');
        $('.cell').empty();
        jeu = [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
    });

var jeu = new Array();
jeu = [0, 0 , 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0 , 0 ,0 ,0 ,0 ,0 ,0 ,0];

    function MAJArray(jeu, index, valeur){
         jeu[index]=valeur;
    }
// verifie la position des X et des O pour les conditions de victoires ou de nulle
    function verification(jeu, element) {
        result = 0;
        for (index = 0; index < 3; index++) {
            if (element == jeu[index]){
                result++;
            }
        }
            if (result == 3){
                return true;
        }else{
                result = 0;
        }
            for (index = 3; index <= 5;  index++){
                if(element == jeu[index]){
                    result++;
            }
        }
                 if(result == 3) {
                    return true;
        }else{
                    result=0;
        }
            for(index = 6; index<= 9; index ++){
                 if (element == jeu[index]){
                    result ++;
            }
        }
                if (result == 3) {
                    return true;
        } else{
                    result= 0;
        }
        for (index = 0; index<=6; index = index + 3){
            if(element == jeu[index]){
                result ++;
            }
        }
        if(result == 3){
            return true;
        }else{
            result = 0;
        }
        for(index = 1; index <= 7; index= index + 3){
            if(element == jeu[index]){
                result++;
            }
        }
        if (result == 3) {
            return true;
        }else{
            result = 0;
        }
        for (index= 2; index<=8; index = index + 3){
            if(element == jeu[index]){
                result ++;
            }
        }
        if (result == 3){
            return true;
        }else{
            result = 0;
        }
        for(index = 0; index <= 8; index = index + 4){
            if(element == jeu[index]){
                result++;
            }
        }
        if(result == 3){
            return true;
        }else{
            result = 0;
        }
        for (index = 2; index<=6; index= index + 2){
            if(element == jeu[index]){
                result++
            }
        }
        if(result == 3){
            return true;
        }else{
            result = 0;
        }
        return false;
    }

    function arrayFinito(jeu){
                 if (jeu.indexOf(0) == -1){
                    return true;
        }else{
                    return false;
        }
    }
    var pts = 1;
    j1 = "Joueur 1";
    pointj1 = 0;
    pointj2 = 0;
    

    $("#currentPlayer").text(j1).css("color", "darkblue").append("<img src='scripts/joueurun.png' />");
   
    j2 = "Joueur 2";

    $(".cell").click(function() {
        if(pts & 1) {
            if($(this).text()==""){
                var index = $(".cell").index(this);
                MAJArray(jeu, index, "X");
                if(verification(jeu, "X")){
                    $("#grid").addClass("won");
                    $(".win-display").text("Le Joueur 1 a gagné !!").css("background", "darkblue").css("color", "white").append("<img src='scripts/joueurun.png' />");
                    pointj1++;
                    $("#playerOne").text(pointj1).css("color", "darkblue").append("<img src='scripts/joueurun.png' />");
                    

                }else{
                    if(arrayFinito(jeu)){
                    $("#grid").addClass("won");
                    $("win-display").text("Et c'est un NUL !");
                    }
                }
                $("#currentPlayer").text(j2).css("color", "red").append("<img src='scripts/joueurde.png' />");
                $(this).text("X").css("color", "darkblue");
                pts++;

            }
        }else{
            if($(this).text() == ""){
                var index = $(".cell").index(this);
                MAJArray(jeu, index,"O");
                if(verification(jeu,"O")){
                    $("#grid").addClass("won");
                    $(".win-display").text("Le Joueur 2 a gagné !!").css("background","red").css("color", "white").append("<img src='scripts/joueurde.png' />");
                    
                    pointj2++;
                    $("#playerTwo").text(pointj2).css("color", "red").append("<img src='scripts/joueurde.png' />");
                }else{
                    if(arrayFinito(jeu)){
                        $("#grid").addClass("won");
                        $(".win-display").text("MATCH NULLLL !!");
                    }
                }
                $("#currentPlayer").text(j1).css("color", "darkblue").append("<img src='scripts/joueurun.png' />");
                $(this).text("O").css("color", "red");
                pts++;
            }
        }
        
    });
    var $button = $('<button class="btn_refresh">Refresh Data</button>');
      
        // Append it
        $('body').append($button);
      
        // Event for this button 
        $button.on('click',function(){
            $( ".row" ).append( "<div class='cell'></div> <div class='cell'></div> <div class='cell'></div>" );

            
            $(".cell").click(function() {
                if(pts & 1) {
                    if($(this).text()==""){
                        var index = $(".cell").index(this);
                        MAJArray(jeu, index, "X");
                        if(verification(jeu, "X")){
                            $("#grid").addClass("won");
                            $(".win-display").text("Le Joueur 1 a gagné !!").css("background", "darkblue").css("color", "white").append("<img src='scripts/joueurde.png' />");
                            pointj1++;
                            $("#playerOne").text(pointj1).css("color", "darkblue").append("<img src='scripts/joueurun.png' />");
                            
        
                        }else{
                            if(arrayFinito(jeu)){
                            $("#grid").addClass("won");
                            $("win-display").text("Et c'est un NUL !");
                            }
                        }
                        $("#currentPlayer").text(j2).css("color", "red").append("<img src='scripts/joueurde.png' />");
                        $(this).text("X").css("color", "darkblue");
                        pts++;
        
                    }
                }else{
                    if($(this).text() == ""){
                        var index = $(".cell").index(this);
                        MAJArray(jeu, index,"O");
                        if(verification(jeu,"O")){
                            $("#grid").addClass("won");
                            $(".win-display").text("Le Joueur 2 a gagné !!").css("background","red").css("color", "white").append("<img src='scripts/joueurde.png' />");
                            
                            pointj2++;
                            $("#playerTwo").text(pointj2).css("color", "red").append("<img src='scripts/joueurde.png' />");
                        }else{
                            if(arrayFinito(jeu)){
                                $("#grid").addClass("won");
                                $(".win-display").text("MATCH NULLLL !!");
                            }
                        }
                        $("#currentPlayer").text(j1).css("color", "darkblue").append("<img src='scripts/joueurun.png' />");
                        $(this).text("O").css("color", "red");
                        pts++;
                    }
                }
                
            });
            
        });
     
      
 
}

$('#grid').morpion();