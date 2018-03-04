$(document).ready(function () {
    var a = 0, b = 0, result = 0, oper = '', equaloper = '', firstone = 0, operator = '', ans = 0;

    $('button[name=num]').click(function () {
        var value = $(this).attr("id");
        if (ans == 1) {
            $('input[id=show]').val('');
            ans = 0;
        }
        if (firstone == 0) {
            $('input[id=show]').val(function (index, value0) {
                return value0 + value;
            });
            a = parseFloat($('input[id=show]').val());
        } else {
            $('input[id=show]').val(function (index, value0) {
                return value0 + value;
            });
            b = parseFloat($('input[id=show]').val());
        }
    });

    $('button[name=del]').click(function () {
        var value = $('input[id=show]').val();
        value = value.toString().substr(0, value.toString().length - 1);
        if (value.toString().length <= 0) {
            value = 0;
        } else if (value == '.') {
            value = value.toString().substr(0, value.toString().length - 1);
        }
        parseFloat($('input[id=show]').val(value));
        if (firstone == 0) {
            a = parseFloat($('input[id=show]').val());
        } else {
            b = parseFloat($('input[id=show]').val());
        }
    });

    $('.operator').click(function () {
        var operator = $(this).attr("id");
        if (oper != '' || equaloper != '') {
            switch (oper || equaloper) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    break;
            }
            a = result; ans = 1; 
            $('input[id=show]').val(function (index, value0) {
                return result;
            });
        }
        switch (operator) {
            case '+':
                firstone++;
                oper = '+';
                equaloper = '+';
                ans = 1;
                break;
            case '-':
                firstone++;
                oper = '-';
                equaloper = '-';
                ans = 1;
                break;
            case '*':
                firstone++;
                oper = '*';
                equaloper = '*';
                ans = 1;
                break;
            case '/':
                firstone++;
                oper = '/';
                equaloper = '/';
                ans = 1;
                break;
            default:
                break;
        }
    });

    $('button[name=equal]').click(function () {
        if (equaloper != '') {
            switch (equaloper) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    break;
            }
            a = result; ans = 1;operator='';b=0;oper='';equaloper='';
            $('input[id=show]').val(function (index, value0) {
                return result;
            });
        }
    });

    $('button[name=clear]').click(function () {
        a = 0, b = 0; result = 0, firstone = 0, oper = ''; operator = '';
        $('input[id=show]').val('');
    });
});