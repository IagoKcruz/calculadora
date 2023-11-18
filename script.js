

function showInput(num){
        
        let number_1;
        
                document.getElementById('showcalculo').value += num;

        if(operations == ''){

                document.getElementById('number1').value += num;
                number_1 = document.getElementById('number1').value
                
        }else{

                document.getElementById('number2').value += num;

        }

}

function showOperations(operations){ 

        document.getElementById('showcalculo').value += operations;

        if(operations === ''){

                document.getElementById('showcalculo').value += operations;  

        }else{

                document.getElementById('number2').value = '';    
                document.getElementById('showcalculo').value = document.getElementById('number1').value + operations;

        }
        
        
       
}


function clearItems(clear){

        switch(clear){

        case 'C':
                
        document.getElementById('showcalculo').value = '';
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('showresult').value = '';
        operations.value = '';
        clear.value = '';

        break;

        case 'CE':

        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value.toString(0).slice(0,-1);

        if(operations == ''){

                document.getElementById('number1').value =  document.getElementById('number1').value.toString(0).slice(0,-1);
                
        }else{

                document.getElementById('number2').value =  document.getElementById('number1').value.toString(0).slice(0,-1);

        }
        

        break;

        }
         
}

function calculo(){

        let first = document.getElementById('number1').value;
        let second = document.getElementById('number2').value;
        let result;

        switch(operations){

                case 'x':

                        result = first * second;
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value

                        break;

                case '÷':

                        result = first / second;
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value

                        break;

                case '-':

                        result = first - second;
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value

                        break;

                case '+':

                        result = parseFloat(first) + parseFloat(second);
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value
                
                        break;

                case 'x²':

                        result = Math.pow(first, second)
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value
                
                        break;

                case '√':

                        result = Math.sqrt(first,second)
                        document.getElementById('showresult').value = result;
                        document.getElementById('number1').value = '';
                        document.getElementById('number2').value = '';
                        document.getElementById('showcalculo').value =  document.getElementById('showcalculo').value


        }


        
}

function radicicao(){

        let first = document.getElementById('showcalculo').value;
        let resultado = document.getElementById('showresult').value;
        let result;     

        if(resultado == 0){
                
                result = Math.sqrt(first)
                document.getElementById('number1').value = '';
                document.getElementById('showcalculo').value = '√' + first;
                document.getElementById('showresult').value = result;

        }else{

                result = Math.sqrt(resultado)
                document.getElementById('number1').value = '';
                document.getElementById('showcalculo').value = '√' + resultado;
                document.getElementById('showresult').value = result;                

        }


}


