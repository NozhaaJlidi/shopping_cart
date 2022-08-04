/*une fonction qui permet de supprimer un produit de la carte*/

let removeCartItemButtons= document.getElementsByClassName('delete');

console.log(removeCartItemButtons);
for( var i=0 ; i<removeCartItemButtons.length; i++){
    var button= removeCartItemButtons[i];
    button.addEventListener('click', function(event) 
    {
        var buttonclicked = event.target
        buttonclicked.parentElement.remove ()

    })

}


/** une fonction qui permet de colorier le coeur en rouge Nb: sans le remplir contour seulement */
let heart_buttn = document.getElementsByClassName('bi-heart');
for (let i = 0; i < heart_buttn.length; i++) {
    heart_buttn[i].addEventListener('click', function onClick() {

        if (heart_buttn[i].style.color =='red') 
        {    heart_buttn[i].style.color = 'black'; }
        else
            heart_buttn[i].style.color = 'red';
    });
}

let price = document.getElementsByClassName('price');
let qunt = document.getElementsByClassName('quantity');
let items = document.getElementsByClassName('item');

/**une fonction qui permet d'additioner un produit à la carte */
let add = document.getElementsByClassName('plus');

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function onClick() {
        qunt[i].value++;

        Total()
    }

    );

}



/**une fonction qui permet de decrementer un produit */

let minus = document.getElementsByClassName('min');

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function onClick() {
        if (qunt[i].value >= 1) {
            qunt[i].value--;
        }
        Total()
    });


/*une fonction qui permet de  calculer le prix total */

    function Total() {
        var cartItems = document.getElementsByClassName('item')
        var sum = 0
        for (var i = 0; i < cartItems.length; i++) {
            var cartItem = cartItems[i]
            var priceElement = cartItem.getElementsByClassName('price')[0]
            var quantityElement = cartItem.getElementsByClassName('quantity')[0]
            var price = parseFloat(priceElement.innerText)
            var quantity = quantityElement.value
            sum = (sum+ (price * quantity))
        }
        document.getElementById('finalPrice').value = sum
    }
}


/*nmbres of items  dans une panier*/
