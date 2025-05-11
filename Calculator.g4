grammar Calculator;

//Gramatica
programa: instruccion*;

instruccion: bucle
    | salida
    ;

bucle: 'mientras' condicion '{' (instruccion)* '}';

salida: 'imprimir' '(' CADENA ')' ';';

condicion: TRUE|FALSE ;


//Lexemas
WHILE: 'mientras';
TRUE: 'verdadero';
FALSE: 'falso';
PRINT: 'imprimir';
SEMICOLON: ';';
PUNTO: '.';
COMA: ',';
EXCL: '!';
QUESTION: '?';
DOUBLE: ':';
COMILLA: '"';
CADENA : '"' [ a-zA-Z0-9.,!?:;"]+ '"';
LPAREN : '(';
RPAREN : ')';
LLLAVE: '{';
RLLAVE: '}';
WS: [ \t\n\r]+ -> skip;