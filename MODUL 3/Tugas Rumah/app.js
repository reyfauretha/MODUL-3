Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', email: '', namabuku: '',  pengarang: '', penerbit: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.email = "";
            this.data.namabuku = "";
            this.data.pengarang = "";
            this.data.penerbit = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        PinjamBuku: {}
    },
    methods: {
        getData: function (value) {
            this.PinjamBuku = {
                nama : value.nama,
                email : value.email,
                namabuku : value.namabuku,
                pengarang : value.pengarang,
                penerbit : value.penerbit
            }
        }
    }
})