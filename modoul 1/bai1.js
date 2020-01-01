let amount,fromCurrency,toCurrency,money=0;
function convert1() {
    document.getElementById("hien").innerHTML="Hiện số tiền là:"+money;
 amount = document.getElementById("nhap").value;
    fromCurrency = document.getElementById("v").value;
    toCurrency = document.getElementById("u").value;

    if(fromCurrency === 'VietNam' && toCurrency === 'USD')
    {
        money=amount*23000;
        document.getElementById("hien").innerHTML="Hiện số tiền là:" +money;
    }
