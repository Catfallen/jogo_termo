
function isAlphaNumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
}
function filtro_letras(lines) {
    console.log(typeof lines)
    console.log(lines[100]);
    console.log(`Antes: ${lines.length}`);
    lines = lines.filter((el) => {
        if (el.length == 5) {
            return isAlphaNumeric(el);
        } else {
            return false
        }
    });
    console.log(`Depois: ${lines.length}`);
    return lines
}



const fs = require('fs').promises;

async function processFiles() {
    try {
        // 1. Read the data
        const data = await fs.readFile('palavras.txt', 'utf8');
        //console.log('Read data:', data);
        let lines = data.split("\n");

        lines = filtro_letras(lines);

        await fs.writeFile(
            'palavras.json',
            JSON.stringify(lines, null, 2)   // <<< formatado e válido
        );
        console.log('Successfully wrote processed data to output.txt');

    } catch (error) {
        console.error('An error occurred during file operations:', error.message);
    }
}

processFiles();
