// DEFINIR CLASES HELPERS
function dashboardHandler() {
    this.init = function () {
        var randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
        };
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            datasets: [{
                type: 'bar',
                label: 'Año en Curos',
                backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                type: 'line',
                label: 'Año anterior',
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]
        };

        var ctx = document.getElementById("canvas").getContext("2d");
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Cuadro comparativo del año anterior vs año actual',
                    fontSize:18
                },
            }
        });

    }
    //var user = JSON.parse( cookie.get("session"));
    var nick = "Default"//user.user.substr(0,user.user.indexOf("@"))
   $(".username").text(nick)
    
}

function studentSearch(){
    this.init = function(){
        view.load();
       // console.log("aa")
        $('#example4').DataTable();
    }
}

function professorSearchHandler(){
    this.init = function(){
        view.load();
        // console.log("aa")
         $('#tableProfessor').DataTable();
    }
}
// SECCION DE CONFIGURACION DE PAGE
var page_dashboard = {
    name: "start",
    page: "./page/home.html",
    postLoad: function () {
        $(document).ready(function () {
            new dashboardHandler().init()
        });
    }
}

var page_sutentArchive = {
    name: "archivo-estudiante",
    page: "./page/student-archive.html",
    postLoad: function () {
        $(document).ready(function () {
            new studentSearch().init()
          
        });
    } 
}
var page_sutentSearch = {
    name: "search-student",
    page: "./page/search-student.html",
    postLoad: function () {
        $(document).ready(function () {
            view.load();
        });
    } 
}

var page_searchProfesor = {
    name: "search-profesor",
    page: "./page/search-profesor.html",
    postLoad: function () {
        $(document).ready(function () {
           new professorSearchHandler().init()
        });
    } 
}

var page_admissions = {
    name: "admissions",
    page: "./page/admissions.html",
    postLoad: function () {
        $(document).ready(function () {
           view.load();
        });
    } 
}

var page_factura = {
    name: "factura",
    page: "./page/factura.html",
    postLoad: function () {
        $(document).ready(function () {
           view.load();
        });
    } 
}
var page_invoice = {
    name: "invoice",
    page: "./page/invoice.html",
    postLoad: function () {
        $(document).ready(function () {
           view.load();
        });
    } 
}
// SECCION DE LOAD LAYOUT
route.load({
    el: "#container",
    notFoundMessage: "<p>404 - Page not found</p>",
    defaultPage: page_dashboard
});



// SECCION REGISTER DE PAGE
route.register(page_dashboard);
route.register(page_sutentArchive);
route.register(page_sutentSearch);
route.register(page_searchProfesor);
route.register(page_admissions);
route.register(page_factura);
route.register(page_invoice);