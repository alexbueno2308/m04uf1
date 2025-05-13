 let num_max = 100;
            let num_min = 1;
            let numero = Math.floor(Math.random() * num_max) + num_min; 
            let contador = 0;

            function comparar_numero() {
                let my_num_input = document.getElementById("campo-id");
                let my_num = my_num_input.value;
                my_num = Number(my_num);
                let resultado = document.getElementById("resultado");

                if (contador == 10){
                    resultado.innerHTML = "<em class=\"error\">El limite de intentos es 10, mala suerte!</em>";
                    field_submit.disabled = true;
                    return;
                }

                if (my_num == "") {
                    resultado.innerHTML = "<em class=\"error\">Es obligatorio poner un numero</em>";
                    return;
                } else if (my_num < num_min || my_num > num_max) {
                    resultado.innerHTML = "<em class=\"error\">El número debe estar entre " + num_min + " y " + num_max + "</em>";
                    return;
                }


                contador++;
                let field_submit = document.getElementById("field_submit");
                field_submit.value = "¡Adivina! " + contador + " fallo/s";

                if (my_num > numero) {
                    resultado.innerHTML = "<em class=\"error\">El número es <strong>mas pequeño</strong> que " + my_num + "</em>";
                    resultado.style.color = "red";
                    my_num_input.classList.add("error-border"); 

                } else if (my_num < numero) {
                    resultado.innerHTML = "<em class=\"error\">El número es <strong>mas grande</strong> que " + my_num + "</em>";
                    resultado.style.color = "red";
                    my_num_input.classList.add("error-border"); 

                } else {
                    resultado.innerHTML = "<em class=\"acierto\">¡OLE! El número seleccionado era " + my_num + "!</em>";
                    resultado.style.color = "green";
                    my_num_input.classList.add("correcto-border"); 
                }

                my_num_input.value = "";
                my_num_input.focus();
            }