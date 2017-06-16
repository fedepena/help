var app = new Vue({
    el: '#app',
    data: data,
    filters: {
        slugify: function (value) {
            var minus;
            //convierte a minuscula la cadena y reemplaza los ( - ) > 1 por "" cierre
            minus = value.toLowerCase().replace(/\-+/g, "");
            // Quitamos acentos y "ñ". 
            minus = minus.replace(/á/gi, "a");
            minus = minus.replace(/é/gi, "e");
            minus = minus.replace(/í/gi, "i");
            minus = minus.replace(/ó/gi, "o");
            minus = minus.replace(/ú/gi, "u");
            minus = minus.replace(/ñ/gi, "n");
            //reemplaza espacios con ( - )
            return minus.replace(/\s+/g, "-");
        }
    }
});