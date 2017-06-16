var app = new Vue({
    el: '#app',
    data: data,
    filters: {
        slugify: function (value) {
            var minus;
            minus = value.toLowerCase().replace(/\s+/g, "-");
            return '/videos/'+minus;
        }
    }
});