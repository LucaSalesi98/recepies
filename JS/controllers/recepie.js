var db = firebase.firestore();

function loadRecepie(){
    var recepieId = GetIdFromUrl();

    db.collection('recepies').doc(recepieId).onSnapshot(function(item){
         var recepie = item.data();
         var recepieId = GetIdFromUrl();
          addRecepie(recepie,recepieId);
         // console.log(recepieIdFromDb);
         // console.log(recepieElementFromDb);
        } );
      
      };
    


function GetIdFromUrl(){
    var UrlID = window.location.search;
    var UrlID2 = UrlID.substring(4, 10000);
    console.log(UrlID);
    console.log(UrlID2);
    return(UrlID2);
}




loadRecepie(); 

function addRecepie(recepie, recepieId){
    var $sourceElement = $('recepie-source-container');
    var title = recepie.name;
    $('#RecepieName').text(title);
    console.log(title);

    var nPersone = recepie.people;
    $('#NPersone').text(nPersone);

    var tpreparazione = recepie.preparationTime;
    var Tpreparazione = tpreparazione.concat(" min");
    $('#TPreparazione').text(Tpreparazione);

    var tcottura = recepie.cookingTime;
    var Tcottura = tcottura.concat(" min");
    $('#TCottura').text(Tcottura);

    var Costo = recepie.cost;
    $('#costo').text(Costo)

    var Descrizione = recepie.description;
    $('#Descrizione').text(Descrizione);

    var Difficolta = recepie.difficulty;
    console.log(Difficolta);
    switch (Difficolta) {
        case "0"
        :
        $('#0stelle').css("display", "block");
        break;
        case "1":
        $('#1stelle').css("display", "block");
        break;
        case "2":
        $('#2stelle').css("display", "block");
        break;
        case "3":
        $('#3stelle').css("display", "block");
        break;
        case "4":
        $('#4stelle').css("display", "block");
        break;
        case "5":
        $('#5stelle').css("display", "block");
        break;
    }
}

addRecepie();
function clearContainer(){
    $('#recepies-list-container').empty();
  }