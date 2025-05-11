import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

        // Lee la entrada desde el archivo específicado, por ej. 'ejemplo1.txt'.
        input = fs.readFileSync('inputCorrecto1.txt', 'utf8');

        // Proceso la entrada con el analizador para obtener el lexer
        let inputStream = CharStreams.fromString(input);
        let lexer = new CalculatorLexer(inputStream);
        const tokens = lexer.getAllTokens();
    
        //Mostrar la tabla de tokens y lexemas
        console.log("\nTabla de Tokens y Lexemas:");
        console.log("--------------------------------------------------");
        console.log("| Lexema         | Token                         |");
        console.log("--------------------------------------------------");
    
        // Recorrer todos los tokens generados por el lexer
        for (let token of tokens) {
            const tokenType = CalculatorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
        }
        console.log("--------------------------------------------------"); 
    
    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    inputStream = CharStreams.fromString(input);
    lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);
    let tree = parser.programa();
    
    // Verificación de erores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: \n${cadena_tree}`);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);   

    }
}


// Ejecuta la función principal
main();
