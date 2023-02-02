function datenSpeichern(event){ //speichert Eingabedaten vom Formular im Local Storage ab
    event.preventDefault();
    var vName = document.getElementById("vname").value;
    var nName = document.getElementById("nname").value;
    var email = document.getElementById("email").value;
    var nachricht = document.getElementById("msg").value;

    localStorage.setItem('Vorname',vName);
    localStorage.setItem('Nachname',nName);
    localStorage.setItem('Email',email);
    localStorage.setItem('Nachricht',nachricht);
}