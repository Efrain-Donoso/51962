import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs, { writeFile } from 'fs';

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
    
        // Borrar archivo en donde estará el código traducido de la gramática a javascript
        fs.writeFile('programa.js', '', (err) => {
                if (err) throw err;
            })
        
        // Recorrer todos los tokens generados por el lexer para generar la tabla y el archivo traducido
        for (let token of tokens) {
            const tokenType = CalculatorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            let traducido;
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);

            // Escribir archivo traducido
            switch(lexema){
                case 'mientras':
                    traducido = 'while';
                break;
                case 'verdadero':
                    traducido = '(true)';
                break;
                case 'falso':
                    traducido = '(false)';
                break;
                case 'imprimir':
                    traducido = 'console.log'
                break;
                default:
                traducido = lexema;
            }
            fs.appendFileSync('programa.js', traducido);
        }
        console.log("--------------------------------------------------\n"); 
        console.log("La traducción a JavaScript de la gramática analizada se colocó en el archivo 'programa.js' \n");
    
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
        console.log(`Árbol de derivación (En formato texto): \n${cadena_tree}`);
        console.log("\n");
    }
}

// Ejecuta la función principal
main();
