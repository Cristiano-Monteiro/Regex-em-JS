/*
Obter expressões regulares que representam as linguagens sobre o alfabeto Σ = {a, b} cujas sentenças 
estão descritas a seguir:
*/

function testeRegex(regex){
    const sentencas = [
        '', 'a', 'aa', 'aaa', 'b', 'bb', 'bbb', 'ab', 'aab', 'aaab', 'ba', 'bba', 'bbba',
        'aba', 'bab', 'aabababaabb', 'babababa', 'abababab', 'aabbaabbaabbb', 'ababaabbbabb'
    ];
    console.log(`REGEX => ${regex}`);
    sentencas.forEach((sentc) => {
        //let testeSentenca = sentc.match(regex);
        let testeRegEx = regex.test(sentc);
        console.log(`${sentc}: ${testeRegEx}`);
    });
};

// Começam com aa
const regex1 = /(^aa)(a|b)*/;
//testeRegex(regex1);

// Não começam com aa
const regex2 = /^[^aa](a|b)*|(^ab)(a|b)*|^a$|^$/;
//testeRegex(regex2);

// Terminam com bbb
const regex3 = /(a|b)*bbb$/;
//testeRegex(regex3);

// Não terminam com bbb
const regex4 = /(a|b)*(a|ab|abb)$|^b$|^bb$|^$/;
//testeRegex(regex4);

// Contém a subcadeia aabbb
const regex5 = /(a|b)*aabbb(a|b)*/;
//testeRegex(regex5);

// Possuem comprimento maior ou igual a 3
const regex6 = /(a|b)(a|b)(a|b)(a|b)*/;
//testeRegex(regex6);

// Possuem comprimento menor ou igual a 3
//const regex7 = /^(a|b)(a|b)(a|b)$|^(a|b)(a|b)$|^(a|b)$|^$/;
const regex7 = /^(a|b)?(a|b)?(a|b)?$/;
//testeRegex(regex7);

// Possuem comprimento diferente de 3
const regex8 = /^(a|b)?(a|b)?$|^(a|b){4}(a|b)*$/;
//testeRegex(regex8);

// Possuem comprimento par
const regex9 = /^((a|b)(a|b))*$/;
//testeRegex(regex9);

// Possuem comprimento ímpar
const regex10 = /^(a|b)((a|b)(a|b))*$/;
//testeRegex(regex10);

// Possuem comprimento múltiplo de 4
const regex11 = /^((a|b){4})*$/;
//testeRegex(regex11);

// Possuem quantidade par de símbolos a
const regex12 = /^b*$|^(b*ab*ab*)*$/;
//testeRegex(regex12);

// Possuem quantidade ímpar de símbolos b
const regex13 = /^a*ba*(a*ba*ba*)*$/;
testeRegex(regex13);