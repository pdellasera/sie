class mainAPP {
    constructor() {
        var self = this
        this.mRole = function () {

        }
        this.mUser = function () {

        }
        this.mClass = function () {

        }
        this.mAdmissions = function () {
            function setGrado() {
                request.post(global.api.getGrados, {}, function (res) {
                    var array = res.response.result.Database[0].Table.Row[0]
                    var selectList = document.getElementById("selectGrado");
                    var notcreate = false;
                    var next = ""
                    for (var i = 0; i < array.length; i++) {
                        if (notcreate == false) {
                            var optionGroup = document.createElement("optgroup");
                            optionGroup.setAttribute("label", array[i].gradosCatName);
                            optionGroup.setAttribute("value", "100");
                            optionGroup.setAttribute("id", "opG" + array[i].gradosCatID);
                            selectList.append(optionGroup);
                            next = array[i].gradosCatID
                            notcreate = true
                        }
                        //console.log('f')
                        if (array[i].gradosCatID == next) {
                            next = array[i].gradosCatID
                            var option = document.createElement("option");
                            option.setAttribute("value", array[i].gradosID);
                            option.innerHTML = array[i].gradosName;
                            optionGroup.append(option);
                        } else {
                            notcreate = false;
                            next = array[i].gradosCatID
                            i = i - 1
                        }

                    }
                });
            }

            function validateCedula(cedula) {
                Array.prototype.insert = function (index, item) {
                    this.splice(index, 0, item);
                };

                var re = /^P$|^(?:PE|E|N|[23456789]|[23456789](?:A|P)?|1[0123]?|1[0123]?(?:A|P)?)$|^(?:PE|E|N|[23456789]|[23456789](?:AV|PI)?|1[0123]?|1[0123]?(?:AV|PI)?)-?$|^(?:PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(?:\d{1,4})-?$|^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i;

                var matched = cedula.match(re);

                // matched contains:
                // 1) if the cedula is complete (cedula = 8-AV-123-123)
                //    matched = [cedula, first part, second part, third part]
                //    [8AV-123-123]
                // 2) if the cedula is not complete (cedula = "1-1234")
                //    matched = ['1-1234', undefined, undefined, undefined]
                var isComplete = false;

                if (matched !== null) {
                    matched.splice(0, 1); // remove the first match, it contains the input string.

                    if (matched[0] !== undefined) {
                        // if matched[0] is set => cedula complete
                        isComplete = true;

                        if (matched[0].match(/^PE|E|N$/)) {
                            matched.insert(0, "0");
                        }

                        if (matched[0].match(/^(1[0123]?|[23456789])?$/)) {
                            matched.insert(1, "");
                        }

                        if (matched[0].match(/^(1[0123]?|[23456789])(AV|PI)$/)) {
                            var tmp = matched[0].match(/(\d+)(\w+)/);

                            matched.splice(0, 1);
                            matched.insert(0, tmp[1]);
                            matched.insert(1, tmp[2]);
                        }
                    } // matched[0]
                }

                var result = {
                    isValid: cedula.length === 0 ? true : re.test(cedula),
                    inputString: cedula,
                    isComplete: isComplete,
                    cedula: isComplete ? matched.splice(0, 4) : null
                };

                //  console.log(result);

                return result;
            }

            $(document).ready(function () {
                // SET DIA DE ADMISION
                Date.prototype.yyyymmdd = function () {
                    var yyyy = this.getFullYear().toString();
                    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = this.getDate().toString();
                    return yyyy + "/" + (mm[1] ? mm : "0" + mm[0]) + "/" + (dd[1] ? dd : "0" + dd[0]); // padding
                };
                var currentDate = new Date()

                $("#currentDate").val(currentDate.yyyymmdd())
                // INPUT CEDULA VALIDATION
                $("#NIP").on("blur", function (e) {
                    var isValid = validateCedula(this.value);
                    if (isValid.isValid == false) {
                        $("#NIP").css("border", "1px solid red")
                        var msn = "No es una cédula valida de la República de Panama"
                        var elemt = $("#NIP").parent().find("span")
                        elemt.css("display", "block").html(msn)
                        $("input").attr("disabled", true)
                        $("#NIP").attr("disabled", false)
                    } else {
                        var elemt = $("#NIP").parent().find("span")
                        elemt.css("display", "none")
                        $("#NIP").css("border", "1px solid #ccc")
                        $("input").attr("disabled", false)
                    }
                })

                // EVENT CHECKED
                $("input[type=checkbox]").on("change", function (e) {
                    e.preventDefault();
                    var id = this.id
                    $("input[type=checkbox]").prop("checked", false)
                    $(this).prop("checked", true)
                    if (id == "E") {
                        $("#NIP").attr("id", "PASP")
                        $("#PASP").attr("placeholder", "Pasaporte");
                    } else {
                        $("#PASP").attr("id", "NIP")
                        $("#NIP").attr("placeholder", "Cedula");
                    }
                })

                // CLEAR AVATAR CONTAINER
                $('.image_title input').blur(function () {
                    if ($(this).val() != '') {
                        $droptarget.removeClass('dropped');
                    }
                });

                // POPUP SECTION
                // $($target).css({
                //     "visibility": "visible",
                //     "opacity": 1,
                //     "display": "block"
                // })
                $(".close").on("click", function () {
                    var target = "#" + this.name
                    console.log(target)
                    $(target).css({
                        "display": "none"
                    })
                })

                // SET SELECT GRADO
                setGrado()

                // SECCION FOR AVATAR IMG SHOW
                var $target = $(".overlay")
                var $dropzone = $('.image_picker'),
                    $droptarget = $('.drop_target'),
                    $dropinput = $('#inputFile'),
                    $dropimg = $('.image_preview'),
                    $remover = $('[data-action="remove_current_image"]');

                $dropzone.on('dragover', function () {
                    $droptarget.addClass('dropping');
                    return false;
                });

                $dropzone.on('dragend dragleave', function () {
                    $droptarget.removeClass('dropping');
                    return false;
                });

                $dropzone.on('drop', function (e) {
                    $droptarget.removeClass('dropping');
                    $droptarget.addClass('dropped');
                    $remover.removeClass('disabled');
                    e.preventDefault();

                    var file = e.originalEvent.dataTransfer.files[0],
                        reader = new FileReader();

                    reader.onload = function (event) {
                        $dropimg.attr("src", event.target.result);
                    };

                    console.log(file);
                    reader.readAsDataURL(file);

                    return false;
                });

                $dropinput.change(function (e) {
                    $droptarget.addClass('dropped');
                    $remover.removeClass('disabled');
                    $('.image_title input').val('');

                    var file = $dropinput.get(0).files[0],
                        reader = new FileReader();

                    reader.onload = function (event) {
                        $dropimg.attr("src", event.target.result);
                    }

                    reader.readAsDataURL(file);
                });

                $remover.on('click', function () {
                    $dropimg.attr("src", "");
                    $droptarget.removeClass('dropped');
                    $remover.addClass('disabled');
                    $('.image_title input').val('');
                });

                // SE INSERTA EL NUEVO ALUMNO 
                $("#addAlumno").on("click", function (e) {
                    var isnull = false;
                    e.preventDefault();
                    binder()
                    var model = binder(dataU)
                    // VALIDAR MODELO
                    $.each(model, function (s, v) {
                        if (v == "" || v == undefined || v == null) {
                            Swal.fire("EL campo " + `"${s}"` + " no puede estar vacio")
                            isnull = true
                            return false;
                        }
                    })
                    if (isnull == false) {
                        var obj = JSON.parse(cookie.get("session"))
                        var data = {
                            sessionID: obj.sessionID,
                            action: - 1,
                            model: model,
                            module: 1
                        }
                        console.log(data)
                    }


                    var action = new UserValidationHadle()
                    action.userPermisos(data)
                })

                // SE CANCELA EL REGISTRO
                $("#cancelAlumno").on("click", function (e) {
                    location.reload()
                })
            })
        }
        this.mAulas = function () {
            $(document).ready(function () {
                $("#addAula").on("click", function (e) {
                    e.preventDefault();
                    binder()
                    var model = binder(dataU)
                    var obj = JSON.parse(cookie.get("session"))
                    var data = {
                        sessionID: obj.sessionID,
                        action: - 1,
                        model: model,
                        module: 102
                    }
                    var action = new UserValidationHadle()
                    action.userPermisos(data)
                })
                setGrado()
                $(".remove").on("click", function () {
                    $("#abc").val("")
                    $("#changeIcon").removeClass("fa fa-times-rectangle")
                })
            })

            function setGrado() {
                request.post(global.api.getGrados, {}, function (res) {
                    var array = res.response.result.Database[0].Table.Row[0]
                    var selectList = document.getElementById("selectGrado");
                    var notcreate = false;
                    var next = ""
                    for (var i = 0; i < array.length; i++) {
                        if (notcreate == false) {
                            var optionGroup = document.createElement("optgroup");
                            optionGroup.setAttribute("label", array[i].gradosCatName);
                            optionGroup.setAttribute("value", "100");
                            optionGroup.setAttribute("id", "opG" + array[i].gradosCatID);
                            selectList.append(optionGroup);
                            next = array[i].gradosCatID
                            notcreate = true
                        }
                        console.log('f')
                        if (array[i].gradosCatID == next) {
                            next = array[i].gradosCatID
                            var option = document.createElement("option");
                            option.setAttribute("value", array[i].gradosID);
                            option.innerHTML = array[i].gradosName;
                            optionGroup.append(option);
                        } else {
                            notcreate = false;
                            next = array[i].gradosCatID
                            i = i - 1
                        }

                    }
                });
            }

            function myFunction() {
                var x = document.getElementById("abc");
                var curVal = x.value;
                if (curVal != "") {
                    $("#changeIcon").addClass("fa fa-times-rectangle")
                }
            }
        }
        this.mInvoice = function () {
            $(document).ready(function () {
                $("#addInvoiceSetting").on("click", function (e) {
                    e.preventDefault();
                    binder()
                    var model = binder(dataU)
                    var obj = JSON.parse(cookie.get("session"))
                    var data = {
                        sessionID: obj.sessionID,
                        action: - 1,
                        model: model,
                        module: 104
                    }
                    console.log(data)
                    //var action = new UserValidationHadle()
                    //action.userPermisos(data)
                })
                $(".test").focusout(function () {
                    var element = $(this);
                    if (!element.text().replace(" ", "").length) {
                        element.empty();
                    }
                });
                $("#imageUpload").change(function () {
                    readURL(this);
                })
            })

            function readURL(input) {
                if (input.files && input.files[0]) {
                    // SECCION DE VALIDACIONES 

                    // 1 - SE VALIDA TAMANO
                    var configFile = input.files
                    var size = 0
                    var type = ""
                    var name = ""
                    var notError = false
                    if (configFile.length > 0) {
                        // se valida tamano
                        size = parseInt(configFile[0].size / 1024)
                        if (size > 100) {
                            Swal.fire({
                                title: 'Ups..?',
                                text: "Lo sentimos pero la imagen es muy pesada!",
                                icon: 'warning',
                                showCancelButton: false,
                                allowOutsideClick: false,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Ok'
                            })
                            notError = true
                            return false
                        }
                        // Validacion de formato
                        type = configFile[0].type.substring(configFile[0].type.indexOf("/") + 1)
                        var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
                        if (allowedExtensions.exec(type)) {
                            Swal.fire({
                                title: 'Ups..?',
                                text: "Lo sentimos pero solo se permite imagenes .jpg / .jpeg / .png!",
                                icon: 'warning',
                                showCancelButton: false,
                                allowOutsideClick: false,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Ok'
                            })
                            notError = true
                            return false
                        }

                        // Validar que el nombre no tenga espacions
                        name = configFile[0].name.indexOf(" ")
                        if (name > 0) {
                            Swal.fire({
                                title: 'Ups..?',
                                text: "Lo sentimos pero el nombre de la imagen no debe contener espacios o algun caracter especial!",
                                icon: 'warning',
                                showCancelButton: false,
                                allowOutsideClick: false,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Ok'
                            })
                            notError = true
                            return false
                        }
                    }
                    if (notError == false) {
                        var imgName = input.files[0].name
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            $("#imgPreview2").attr("src", e.target.result)
                            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                            $('#imagePreview').hide();
                            $('#imagePreview').fadeIn(650);
                            $('#imgSave').val(imgName);
                        }
                        reader.readAsDataURL(input.files[0]);
                    }

                }
            }

        }

        this.mSearchStudent = function () {
            $(document).ready(function () {
                $(".submit").on("click", function (e) {
                    e.preventDefault()
                    binder()
                    var model = binder(dataU)
                    if(model.query == ""){
                        Swal.fire({
                            title: 'Upss!',
                            text: "No existe criterio para la busqueda",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        }).then((result) => {
                            if (result.value) {
                                return false;
                            }
                        })
                    }else{
                        var array = JSON.parse(cookie.get("allStudents"));
                        var grouped = plugdo
                            .select("clubID, userID, sessionID, nombre, apellido,img,edad,perfil")
                            .from(array)
                            .where((item) => {
                                var value = model.query
                                var result = false;
                                var fullName = item.nombre.trim() + " " + item.apellido.trim()
    
                                if (fullName == value || item.nombre.trim() == value || item.apellido.trim() == value || item.cedula.trim() == value || item.gradosName.trim() == value) {
                                    result = true;
                                }
                                return result;
                            })
                            .return();
    
                        var elem = {
                            "css": "row",
                            "items": []
                        }
                        
                        elem.items = grouped;
                        console.log(grouped)
                        view.setData("studentCard", elem);
                    }
                   
                })
            })

        }
    }
}
