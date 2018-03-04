$(document).ready(function(){
    var a=0,b=0,result=0,dot=0,oper='',firstone=0,operator='',ans=0;

    $('button[name=num]').click(function(){
        var value=$(this).attr("id");
        console.log(value);
        if(ans==1){
            $('input[id=show]').val(function(index,value0){
                return '';
            });
            ans=0;
        }
        if($('input[id=show]').val()=='0'){           
            if(value=='.'){
                $('input[id=show]').val(function (index,value0) { 
                    return value0+value; 
                });
                console.log('num:a='+a);             
            } else{
                $('input[id=show]').val(value);
                console.log(111111111);
            }
        }else if(firstone==0){
            $('input[id=show]').val(function (index,value0) { 
                return value0+value;
            });
            a=parseFloat($('input[id=show]').val());
            console.log('num:b='+b);
            console.log('num:a='+a); 
        }else{
            console.log(result);            
            $('input[id=show]').val(function (index,value0) { 
                return value0+value;
            });
            b=parseFloat($('input[id=show]').val());
            console.log('num:b='+b);
            console.log('num:a='+a);
        }                        
    }); 

    $('button[name=del]').click(function(){
        var value =$(this).val();
        if(value.tostring().length<=0){
            $('input[id=show]').val('0');
        }else{
            for(i=0;i<(value.tostring().length-1);i++)
            {
                if(value[i-1]=='.a'){oper='';}
                parseFloat(value);
            }
        }
    });  

    $('.operator').click(function(){
        console.log('operator');
        //var result=$(this).val();
        //if($('input[id=show]').val()==operator){
            var operator=$(this).attr("id");
        //}                
        //if(oper==''){
            switch(operator){
                case '+':                                        
                    console.log('+');
                    if(oper==''||result==0){                        
                        //a=parseFloat($('input[id=show]').val());                        
                        console.log('a='+a);
                        result=a;
                        //a=0; 
                        firstone++;
                        oper='+'
                        ans=1;                                                              
                    }else{
                        $('input[id=show]').val(function(index,value0){
                            return '';
                        });                        
                        //b=parseFloat($('input[id=show]').val());
                        console.log('b='+b); 
                        firstone++;
                        oper='+'; 
                    }                
                    break;
                default:
                    break;
            }
        //}else{
            
            // if(result!=0){
            //     $('input[id=show]').val(function (index,value0) { 
            //         return result;
            //         console .log(result);
            //     });            
            // }else{
            //     $('input[id=show]').val(function (index,value0) { 
            //         return value0+value;                                                                                                            
            //     });
            // }    
            //result=parseFloat(result.toFixed(2));                                            
        //}
        switch(oper){
            case '+':
              result=a+b;
              console.log('a+b='+result);              
              break;
            case '-':
              result=a-b;
              console.log('a-b');
              break;
            case '*':
              result=a*b;
              console.log('a*b');
              break;
            case '/':
              result=a/b;
              console.log('a/b');
              break;
            default:
              break;
            console.log('switch:'+result);
        } 
        console.log(result);
        a=result;oper='';operator='';
        $('input[id=show]').val(function(index,value0){
            return a;
            result='';b='';
        });     
    });

     $('button[name=equal]').click(function(){
        switch(oper){
            case '+':
                result=a+b;
                break;
            case '-':
                result=a-b;
                break;
            case '*':
                result=a*b;
                break;
            case '/':
                result=a/b;
                break;
            default:
                break;    
        }
        console.log(result);
        a=result;oper='';operator='';
        $('input[id=show]').val(function(index,value0){
            return a;
            result='';b='';
        });
    }); 

    $('button[name=clear]').click(function(){
        a=0,b=0;result=0,firstone=0,oper='';
        $('input[id=show]').val('');
    });
});