var charIndex = -1;
var stringLength = 0;
var inputText;
var currentStyle = 'inline';
var stap=1;
function writeContent(init){
            if(init){
                inputText =$(".re"+stap).text();
            }
            if(charIndex==-1){
                charIndex = 0;
                stringLength = inputText.length;
            }
            var initString =$(".con"+stap).text();
            initString = initString.replace(/<SPAN.*$/gi,"");
            
            var theChar = inputText.charAt(charIndex);
            var nextFourChars = inputText.substr(charIndex,4);
            if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
                theChar  = '<BR>';
                charIndex+=3;
            }
            initString = initString + theChar + "<SPAN id='blink'></SPAN>";
            $(".con"+stap).html(initString);
            charIndex = charIndex/1 +1;
            if(charIndex%2==1){
                         $("#blink").css("display","none");
                    }else{
                         $("#blink").css("display","inline");
                    }
                    
            if(charIndex<=stringLength){
                setTimeout('writeContent(false)',200);
            }else{
            	stap++;
                next(stap);
            }  
        }
        function next(stap){
            switch(stap){
            	case 2:
            		$(".sh1").show();
            		charIndex = -1;
					stringLength = 0;
					currentStyle = 'inline';
            		writeContent(true);
            		break;
            	case 3:
            		$(".sh2").show();
            		charIndex = -1;
					stringLength = 0;
					currentStyle = 'inline';
            		writeContent(true);
            		break;
            	case 4:
            		$(".sh3").show();
            		break;
            }

        }