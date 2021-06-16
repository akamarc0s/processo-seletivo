// MARCOS ANTONIO DE SANTANA JUNIOR
// PROCESSO SELETIVO ROCKY

function read_json() { // função de leitura do nosso arquivo JSON com defeitos
    var request = require('./broken-database.json'); // requisição da base de dados
    var data = JSON.parse(JSON.stringify(request)); // transformando a requisição JSON em um arquivo objeto JS para manipulação
    return data;
}

function create_json(data) { // função de criação do novo arquivo JSON corrigido
    var fs = require('fs'); // criada uma requisição para guardar o arquivo no disco
    fs.writeFile("./saida.json", JSON.stringify(data, null, 4), function (err) { // criação de um novo arquivo JSON "saida.json"
        if (err) throw err; // tratamento de excessão caso não seja possível criar o arquivo
    }
    );
}

function fix_name(data) { // função para alterar os caracteres especiais
    for (i = 0; i < data.length; i++) {
        data[i].name = data[i].name.replace(/¢/g, "c").replace(/æ/g, "a").replace(/æ/g,).replace(/ø/g, "o").replace(/ß/g, "b"); // expressões regulares para trocar todos os caracteres especiais.
    }
};
function fix_price(data) { // função para modificar os preços que estão em uma string, transformando em float
    for (i = 0; i < data.length; i++) {
        if (typeof data[i].price === 'string') { // verifica se a variavável preço é do tipo string
            data[i].price = parseFloat(data[i].price); // modifica seu valor para float
        }
    }
};
function fix_quantity(data) { // função para adicionar quantidade em tuplas sem o atributo  
    for (i = 0; i < data.length; i++) {
        if (!data[i].quantity && !(data[i].quantity === 0)) { // verifica se não há o atributo quantidade e se o mesmo é diferente de 0
            data[i]['quantity'] = 0; // adiciona um atributo quantidade para essa tupla
        }
    }
}

function sort_name_and_id(data) {  // função que irá imprimir em ordem crescente o nome dos produtos e os id's
    data.sort(function (a, b) { // função que compara uma lista de objetos e os ordena em ordem crescente
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); // caso o objeto seja maior, o coloca a frente do outro (return 1)
    }
    );
    for (i = 0; i < data.length; i++) { // impressão dos nomes no console
        console.log(data[i].name);
    }
    data.sort(function (a, b) { // função que ordena os id's
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); // caso o objeto seja maior, o coloca a frente do outro (return 1)
    });
    for (j = 0; j < data.length; j++) { // impressão dos ids no console
        console.log(data[j].id);
    }
}

function count_stock(data) { // função de contagem do estoque de cada categoria
    var count_panelas = 0, count_eletronico = 0, count_eletrodomestico = 0, count_acessorios = 0; // criação das variavéis que vão armazenar a contagem de cada categoria
    for (i = 0; i < data.length; i++) { // percorre todo o arquivo JSON comparando sua categoria e adicionando seu (valor x quantidade) a cada variavél de contagem 
        if (data[i].category === "Panelas") {
            count_panelas += (data[i].price * data[i].quantity);
        }
        if (data[i].category === "Eletrodomésticos") {
            count_eletrodomestico += (data[i].price * data[i].quantity);
        }
        if (data[i].category === "Eletrônicos") {
            count_eletronico += (data[i].price * data[i].quantity);
        }
        if (data[i].category === "Acessórios") {
            count_acessorios += (data[i].price * data[i].quantity);
        }
    }
    var count_total = { count_panelas, count_eletrodomestico, count_eletronico, count_acessorios }; // vetor com o valor de todas as contagens
    return count_total;

};

var data = read_json();
fix_name(data);
fix_price(data);
fix_quantity(data);
//console.log(data);
create_json(data);
sort_name_and_id(data);
count_stock(data);

