var request = require('./broken-database.json'); // requisição da base de dados
var data = JSON.parse(JSON.stringify(request)); // transformando a requisição JSON em um arquivo objeto JS para manipulação
fix_name(data);
fix_price(data);
fix_quantity(data);
console.log(data);

function fix_name(data) { // função para alterar os caracteres especiais
    for (i = 0; i < data.length; i++) {
        data[i].name = data[i].name.replace(/¢/g, "c").replace(/æ/g, "a").replace(/æ/g,).replace(/ø/g, "o").replace(/ß/g, "b"); // expressões regulares para trocar todos os caracteres especiais.
        console.log(data[i].name);
    }
};
function fix_price(data) { // função para modificar os preços que estão em uma string, transformando em float
    for (i = 0; i < data.length; i++) {
        if (typeof data[i].price === 'string') { // verifica se a variavável preço é do tipo string
            console.log(data[i].price);
            data[i].price = parseFloat(data[i].price); // modifica seu valor para float
            console.log(data[i].price);
        }
    }
};
function fix_quantity(data) { // função para adicionar quantidade em tuplas sem o atributo  
    for (i = 0; i < data.length; i++) {
        if (!data[i].quantity && !(data[i].quantity === 0)) { // verifica se não há o atributo quantidade e se o mesmo é diferente de 0
            data[i]['quantity'] = 0; // adiciona um atributo quantidade para essa tupla
            console.log(data[i]);
        }
    }
};