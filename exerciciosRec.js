// Aluno Guilherme Galvão de Souza Turma 03 
//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
function retanguloPerimetroArea (base, altura){
    let area = base*altura
    let perimetro = 2*(base+altura)
    return console.log(`A área do retângulo é ${area} cm²  e seu perimetro é ${perimetro} cm`)
}
//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
function quadradoPerimetroArea(lado){
    let area = Math.pow(lado,2)
    let perimetro = 4*lado
    return console.log(`A área do quadrado é ${area}cm² e o perimetro é ${perimetro} cm`)
}
//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
function circunferenciaAreaPerimetro(raio){
    let area = (Math.PI * Math.pow(raio,2)).toFixed(2)
    let perimetro = (2 *Math.PI *raio).toFixed(2)
    return console.log(`A área da circunferência é ${area} cm² e o perímetro é ${perimetro} cm`)
}
//4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
function perimetroTriangulo(lado){
    let perimetro  = lado*3
    return console.log(`O perímetro do triângulo é ${perimetro}`)
}
//5. Ler um número inteiro e exibir o seu sucessor.
function exibirSucessor(numero){
    return console.log(`O próximo numero é ${++numero}`)
}
