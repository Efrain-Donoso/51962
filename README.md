# 51962 - Tomás Donoso
Proyecto analizador materia Sintaxis y Semántica de los Lenguajes

# Instalación
Clona este repositorio: git clone https://github.com/Efrain-Donoso/51962

# Prerrequisitos
Para poder utilizar este analizador y mostrar el árbol de manera gráfica, deberemos tener instalado Visual Studio Code con la extensión de ANTLR4, de lo contrario solo podremos ver el arbol de la gramática en formato de texto.

# Instrucciones de Uso
Para poder usar el analizador debemos correr el archivo de JavaScript "index.js". Para cambiar el archivo de ejemplo que tomará el programa debemos modificar el nombre del archivo a leer en la linea 13 del código.
## Nota
Al correr el programa se mostrará el arbol en formato de texto en la terminal, si queremos generarlo de manera gráfica con la extensión de ANTLR4 de visual studio, deberemos cambiar en la configuración de la extensión el archivo de texto a leer, que por defecto es 'inputCorrecto1.txt'.

![alt text](https://github.com/Efrain-Donoso/51962/blob/main/launch%20json.png)


# Ejemplo de uso
Abrimos el archivo 'index.js' y lo ejecutamos usando la terminal de Visual Studio o la extensión Code Runner, en la terminal se mostrarán los siguientes resultados:
![image](https://github.com/user-attachments/assets/5d22857b-31a3-4395-a27a-361eafa8a72a)
Si queremos ver el árbol me forma gráfica, con la extensión ANTLR4 instalada, debemos abrir el archivo 'Calculator.g4' y presionar F5.
![image](https://github.com/user-attachments/assets/e2b48db2-e4ff-428e-8d8b-eb5c61f11954)

## Traducción a JavaScript
La traducción de la gramática de ejemplo a JavaScript se guardará en el archivo llamado 'programa.js', para poder verificar que la traducción fue correcta, podemos ejecutarlo usando la terminal o la extensión de Visual Studio.
![image](https://github.com/user-attachments/assets/b6951507-ab6d-40bd-8702-c6999278b2c9)




