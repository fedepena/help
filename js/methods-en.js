var app = new Vue({
    el: '#app',
    data: data,
    filters: {
        slugify: function (value) {
            var minus;
            //convierte a minuscula la cadena y reemplaza los ( - ) > 1 por "" cierre
            minus = value.toLowerCase().replace(/\-+/g, "");
            //reemplaza espacios con ( - )
            return '../videos/' + minus.replace(/\s+/g, "-");
        }
    }
});