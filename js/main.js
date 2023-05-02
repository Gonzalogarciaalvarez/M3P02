//Pediremos el radio de la esfera

const valorRadio = prompt ("Cuanto es el radio de la esfera?");

const formula = ("4/3 *PI*"+valorRadio+"^3");    

const vol =Math.round( 4/3 * Math.PI * +(Math.pow(valorRadio,3)));

alert ('El volumen de la esfera es igual a '+formula+', por tanto una esfera de radio '+valorRadio+' tiene un volumen de '+vol)