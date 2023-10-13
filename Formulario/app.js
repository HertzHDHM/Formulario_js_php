function validate(){
    var user = document.getElementById("user").value;
    var fullName = document.getElementById("name").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var insideN = document.getElementById("number").value;
    var col = document.getElementById("col").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var cp = document.getElementById("cp").value;

    var validatePasswords = 0;

    var counterMistakesStreet = 0;
    var countTrysStreet = 0;
    var counterMistakesNumber = 0;
    var countTrysNumber = 0;
    var counterMistakesCp = 0;
    var countTrysCp = 0;
    var counterMistakesCol = 0;
    var countTrysCol = 0;
    var validatePassword = [];
    var validateStreet = [];
    var validateNumber = [];
    var validateCp = [];
    var validateCol = [];
    var aux1 = 0;
    var aux2 = 0;
    var aux3 = 0;
    if(user === "" || fullName === "" || password1 === "" || password2 === "" || email === "" || street === "" || insideN === "" || col === "" || state === "" || country === "" || cp === ""){
        alert("No se pueden dejar campos vacíos.");
    } else {
        //Validacion colonia
        for(let i = 0; i<col.length; i++){
            const ascii = col.charCodeAt(i);
            validateCol.push(ascii);
        }
        for(let i = 0; i<validateCol.length;i++){
            if(validateCol[i] != 32 && validateCol[i]< 65 && validateCol[i]>90 && validateCol[i]<97 && validateCol[i]>122){
                counterMistakesCol++;
            }
            if(validateCol[i]>= 48 && validateCol[i]<=57){counterMistakesCol++;}
            if(validateCol[i] == validateCol[i+1] && validateCol[i+1] == validateCol[i+2]){counterMistakesCol++;}
            countTrysCol++;
        }
        
        if(counterMistakesCol>0 || countTrysCol<5){
            alert("Colonia invalida");
        } else {
            alert("Colonia valida");
        }

        //------------------
        //Validacion codigo postal
        for(let i = 0; i<cp.length; i++){
            const ascii = cp.charCodeAt(i);
            validateCp.push(ascii);
        }
        for(let i = 0; i<cp.length;i++){
            if(validateCp[i]<48 || validateCp[i]>57){
                counterMistakesCp++;
            } else {
                countTrysCp++;
            }
        }
        if(counterMistakesCp>0||countTrysCp>5 || countTrysCp<5){
            alert("Codigo postal invalido ");
        } else{
            alert("Codigo postal valido ");
        }
        //------------------------

        //Validar correo
        const regularExp1 =  /^[a-zA-Z0-9._-]+@gmail\.com$/;
        const regularExp2 =  /^[a-zA-Z0-9._-]+@hotmail\.com$/;
        const regularExp3 =  /^[a-zA-Z0-9._-]+@ceti\.mx$/;
        var valid1 = regularExp1.test(email);
        var valid2 = regularExp2.test(email);
        var valid3 = regularExp3.test(email);
        if(valid1 == true || valid2 == true || valid3 == true){
            alert("Correo electronico valido");
        }else{
            alert("Correo electronico invalido ");
        }
        //---------------------

        //Validacion de contraseñas
        var counter = 0;
        for(var i = 0; i<password1.length ; i++){
            if(validatePassword[i]!=""){counter++;}
        }
        if(password1 == password2){
            validatePasswords = 1;
        }else{
            validatePasswords = 0;
        }
        if(validatePasswords == 0){
            alert("Las contraseñas no son iguales");
        }else if(counter>=6){
            alert("Contraseña creada exitosamente");
        }
        if(counter<6){alert("La contraseña debe de tener al menos 6 caracteres");}
        //---------------------------

        //-------Validacion del campo calle
        for(let i = 0; i<street.length; i++){
            const ascii = street.charCodeAt(i);
            validateStreet.push(ascii);
            countTrysStreet++;
        }
        for(let i = 0; i<validateStreet.length;i++){
            if(validateStreet[i]<65 && validateStreet[i]>90 && validateStreet[i]<97 && validateStreet[i]>122){
                counterMistakesStreet++;
            }
            if(validateStreet[i] == 32){ aux1++;}
            if(validateStreet[i] == 35){ aux2++;}
            if(aux2>0 && validateStreet[i]>=48 && validateStreet[i]<=57){ aux3++; }
            if(validateStreet[i] == validateStreet[i+1] && validateStreet[i+1] == validateStreet[i+2]){ counterMistakesStreet++; }
        }
        if(aux1 == 0 || aux2 == 0 || aux3 == 0){ counterMistakesStreet++; }
        if(counterMistakesStreet>0 || countTrysStreet<5){
            alert("Calle invalida");
        } else {
            alert("Calle valida");
        }
        //--------------------------------

        //------Validacion del campo numero interior
        for(let i = 0; i<insideN.length; i++){
            const ascii = insideN.charCodeAt(i);
            validateNumber.push(ascii);
        }
        for(let i = 0; i<insideN.length;i++){
            if(validateNumber[i]<48 || validateNumber[i]>57){
                counterMistakesNumber++;
            } else {
                countTrysNumber++;
            }
        }
        if(counterMistakesNumber>0||countTrysNumber>4 || countTrysNumber<4){
            alert("Numero interior invalido");
        } else{
            alert("Numero interior valido ");
        }
        //--------------------------------


        if(document.getElementById("male").checked === false && document.getElementById("female").checked === false){
            alert("Debe seleccionar su género.");
        }
        if(document.getElementById("soccer").checked === false && document.getElementById("paint").checked === false && document.getElementById("music").checked === false && document.getElementById("volley").checked === false){
            alert("Debe seleccionar al menos un hobbie.");
        }
        if(counterMistakesCol == 0 && counterMistakesCp == 0 && counterMistakesNumber == 0 && counterMistakesStreet == 0){
            const form = document.getElementById("myForm");
            const datas = new FormData(form); 
            
            textArea.value = ("Nombre de usuario: "+datas.get("user_name")+"\nNombre completo: "
            +datas.get("fullName")+"\nContraseña ingresada: "+datas.get("password2")+
            "\nCorreo electronico registrado: "+datas.get("e-mail")+"\nCalle y número registrado: "+datas.get("street")
            +"\nColonia registrada: "+datas.get("col")+"\nEstado de provenencia: "+datas.get("state")+"\nPaís de origen: "+datas.get("country")
            +"\nCodigo postal ingresado: "+datas.get("cp")+"\nEstado civil: "+datas.get("civil"));
            fetch('data.php',{
                method: 'POST',
                body: datas
            })
                .then(res => res.json())
                .then( datos => {
                    console.log(datos)
                })
        }
    }
    
    return false;
}