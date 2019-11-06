(function(Vue){
    "use strict";
    var url = "127.0.0.1:8080/"
var  vue = new Vue({
    el: '#container',
    data: {
        message: 'Hello Vue.js!',
        data: {},
        items: []
    },
    methods: {
        showLearn: function (event) {
            this.$http.get('http://localhost:8080/user').then(function (res) {
               this.items = res.data.items;
            });
        },
        share: function (event) {
            this.data = {"name": "abcd", "age": 10}
        },
        contact: function (event) {
        }
    }
})


})(Vue);


