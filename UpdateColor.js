var network = new brain.NeuralNetwork();

network.train([
    //Fondo Negro (Entrada en 0s) = Texto blanco (salida = 1)
    {input: {rojo:0, verde:0, azul:0}, output: {color:1}},

    //Fondo Blanco (Entrada en 1s) = Texto negro (salida = 0)
    {input: {rojo:1, verde:1, azul:1}, output: {color:0}},

    //Fondo Verde (Entrada en 1s) = Texto negro (salida = 0)
    {input: {rojo:0, verde:1, azul:0}, output: {color:0}}
])

function update(color){
    //console.log(color.toRGBAString());
    var div = document.getElementById('sitio');
    div.style.background = color.toHEXString();


        var entrada = {
            rojo:color.channels.r/255,
            verde:color.channels.g/255,
            azul:color.channels.b/255
        }

        var resultado = network.run(entrada);

        div.style.color = (resultado.color > .5? 'white' : 'black')
}