var size = "10.5";
var amount = 1;

function addToCart() {
	var sizesList=document.getElementsByName("skuAndSize")[0];
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = amount-1;
	}
	function setSizeValue() {
		for (var i=0; i<sizesList.length; i++){
			if(sizesList.options[i].text == size) {
				document.getElementsByName("skuAndSize")[0].selectedIndex = i;
				setQuantity();
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    document.getElementsByClassName("add-to-cart nsg-button--nike-orange")[0].click();
	} else {
	    setTimeout("addToCart()", 250);
	}
}
setTimeout("addToCart()", 250);