Vue.component('work', {
    props: {
        'details': {type: Object, required: true}
    },
    template: `<div class="col-md-4 mt-3 hvr-grow mb-4">
                    <div class="work-cards">
                        <a :href="details.webName" target="_blank"><img class="mokup img-responsive" :src="details.mokup" alt="mokup" /></a>
                        <h3><a :href="details.webName" target="_blank">{{details.workName}}</a></h3>
                        <p>{{details.workType}}</p>
                    </div>
                </div>`
});



new Vue ({
    'el': '#app',
    'created': function (){
        this.getInfo();
    },
    'methods': {

        getInfo: function() {
            // GET /someUrl
            this.$http.get('../json/work.json').then(response => {

                // get body data
                this.infos = response.body;

            }, response => {
                // error callback
            });
        }
    },
    'data': {
        'infos': []
    },
    'template': `<div class="row">
                    <work v-for="info in infos" :details="info"></work>
                </div>`
});


Vue.component('services', {
    props: {
        'details': {type: Object, required: true}
    },
    template: `<div class="col-md-4 hvr-glow pt-2">
                    <div class="service-box">
                    <div class="service-heade">
                        <img :src="details.serviceImage" :alt="details.alt">
                        <h4 class="number">{{details.serviceNum}}</h4>
                    </div>
                    <h4 class="single-skill">{{details.service}}</h4>
                    </div>
                </div>`
});

new Vue ({
    'el': '#app2',
    'created': function (){
        this.getInfo();
    },
    'methods': {

        getInfo: function() {
            // GET /someUrl
            this.$http.get('../json/services.json').then(response => {

                // get body data
                this.infos = response.body;

            }, response => {
                // error callback
            });
        }
    },
    'data': {
        'infos': []
    },
    'template': `<div class="row">
                    <services v-for="info in infos" :details="info"></services>
                </div>`
});