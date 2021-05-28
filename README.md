# Na semana três, aprendemos sobre loop, escopo e função

**Sobre o loop, vimos duas formas: FOR, WHILE E DO...WHILE**

# FOR
    - Essa estrutura de repetição é executado até que uma condição seja falsa
    - É preciso passar três expressões para que seja executada
    - Sua sintaxe é composta da seguinte maneira:
        for ([inicialização]; [condição]; [expressão final]) {
            o que precisa ser repetido
        }
    - É importante frisar que o ";" (ponto e vírgula) são estritamentes necessários para que estrutura FOR seja executada

# WHILE
    - A declaração while cria um laço que executa uma rotina especifica enquanto a condição for verdadeira
    - Sua sintaxe é composta da seguinte maneira:
        condição a = x
        condição b = y

        while (a > b) {
            a++;
            b += a
        }

# DO...WHILE
    - A instrução se repetirá até que a condição especificada seja falsa
    - Sua sintaxe:
        do
            declaracao
        while (condicao);

**Vimos duas formas de declarações: break e continue:**

# BREAK:
    - Esta declaração tem como objetivo terminar laços (for, switch, while, do..while)

# CONTINUE:
    - A declaração continue pode ser usada para reiniciar uma instrução while, do-while, e for
    - Quando usada, ela pulará uma instrução e seguirá para a próxima


**Vimos sobre escopo:**
# ESCOPO
    - Escopo significa quais dados podem ser ou não acessados em uma determinada parte do seu código
    - Existem dois tipos de escopos conhecidos:
        * LOCAL:  São variáveis, objetos, que foram declaradas dentro de bloco especifico e só pode ser acessado ali mesmo;
        * GLOBAL: São também variáveis, objetos que declaramos fora de um bloco espeficico e que pode ser acessada em qualquer parte do seu código

**E por último, funções (que em particular é meu xodó)**

# FUNÇÃO
    - Funções basicamente são blocos de instruções que irá executar uma ação
    - Para criar uma função, usamos a palavra reservada "function"
    - O que se declara dentro do parâmetro da função "()", podem ser consideradas como variáveis "temporárias", ou seja, só existem debtri daquela função (vimos acima que são mais conhecidas como escopo local)
    - Sua sintaxe é composta da seguinte maneira: 
        function nomeDaFuncao (parametro(s)) {
            return (o que a função retornará)
        }
    - Declarar uma função não significa que ela por si só já executa a ação sozinha. Nós precisamos chama-la com os argumentos que nós queremos ou que são necessários
        - Por exemplo, vamos criar uma função que some dois números:
            function somar (a, b) {
                return a + b
            }
                - No exemplo acima, somar é o nome da nossa função, os parâmetros são a e b
                - Se a gente apertar o play, não vamos conseguir executar a função, nada será somado
                - Por isso, precisamos chamar a função passando os argumentos:
                    console.log(somar(5, 7))
                    - A gente "invoca" a função, cujo nome é somar, e passamos os argumentos 5 e 7. 
                    - Agora sim, caso você aperte o play, será exibido no seu console o resultado 12, que é resultado da soma entre 5 e 7. Legal, né?!!



