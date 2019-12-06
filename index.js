document.getElementById('mapGraphic2').style.display = 'none';
        document.getElementById('myChart').style.display = 'block';
        document.getElementById('map').style.display = 'none';
        document.getElementById('mapGraphic').style.display = 'block';

let button_block2 = document.getElementById('mapGraphic2');
button_block2.addEventListener('click', () => {
        console.log(document.getElementById('myChart'))
        document.getElementById('mapGraphic2').style.display = 'none';
        document.getElementById('myChart').style.display = 'block';
        document.getElementById('map').style.display = 'none';
        document.getElementById('mapGraphic').style.display = 'block';
});

let button_block = document.getElementById('mapGraphic');
button_block.addEventListener('click', () => {
        console.log(document.getElementById('myChart'))
        document.getElementById('myChart').style.display = 'none';
        document.getElementById('map').style.display = 'block';
        document.getElementById('mapGraphic').style.display = 'none';
        document.getElementById('mapGraphic2').style.display = 'block';
});


const firebaseConfig = {
        apiKey: "AIzaSyA7njoATlPyzGF60LsDfujCJZ1pKJiFjnQ",
        authDomain: "bosch-bus.firebaseapp.com",
        databaseURL: "https://bosch-bus.firebaseio.com",
        projectId: "bosch-bus",
        messagingSenderId: "222527960687",
        appId: "1:222527960687:web:cd36b5877a7c224a707f9a",
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);const app = firebase.app();
    let usersArray = [];
    let dbRef = firebase.database().ref().child("users");
    const showButton = document.getElementById("showButton");
    const cardsContainer = document.getElementById("card");    

function initMap() {
        // Creamos un objeto mapa y especificamos el elemento DOM donde se va a mostrar.
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.967268, lng: -102.284398},
        scrollwheel: false,
        zoom: 9,
        zoomControl: true,
        rotateControl : false,
        mapTypeControl: true,
        streetViewControl: false,
        });
        // Creamos dos marcadores.
 var marker1 = new google.maps.Marker({ 
        position: {lat: 22.066937, lng: -102.271547},
        draggable: false
        });
        var marker2 = new google.maps.Marker({
        position: {lat: 21.878069, lng: -102.30299},
        draggable: false
        });
        var marker3 = new google.maps.Marker({
        position: {lat: 21.886840, lng: -102.27649},
        draggable: false
        });
         var marker4 = new google.maps.Marker({
         position: {lat: 21.867733, lng: -102.265584},
         draggable: false
        });
        var marker5 = new google.maps.Marker({
        position: {lat: 21.859985, lng: -102.275503},
        draggable: false
         });
        var marker6 = new google.maps.Marker({
        position: {lat: 22.012588, lng: -102.305131},
        draggable: false
        });
        var marker7 = new google.maps.Marker({
        position: {lat: 21.903337, lng: -102.299494},
        draggable: false
        });
         var marker8 = new google.maps.Marker({
         position: {lat: 21.881649, lng: -102.280347},
         draggable: false
        });
        var marker9 = new google.maps.Marker({
        position: {lat: 21.882354, lng: -102.269807},
        draggable: false
         });
        var marker10 = new google.maps.Marker({
        position: {lat: 21.943591, lng: -102.291598},
        draggable: false
         });

       // Le asignamos el mapa a los marcadores.
       marker1.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);
        marker5.setMap(map);
        marker6.setMap(map);
        marker7.setMap(map);
        marker8.setMap(map);
        marker9.setMap(map);
        marker10.setMap(map);
       }

       dbRef.on("child_added", snap => {
        cardsContainer.innerHTML +=
         `<div id="info">
         <h3>${snap.val().Name}</h3>
         <p>${snap.val().CheckIn}</p>
         </div>`
    });
        
    document.getElementById("morning").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                if(snap.val().Location ==="1"){
                cardsContainer.innerHTML +=
                `<div id="info">
                <h3>${snap.val().Name}</h3>
                <p>${snap.val().CheckIn}</p>
                </div>`
                }
        });
    })

    document.getElementById("evening").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                if(snap.val().Location==="2"){
                cardsContainer.innerHTML +=
                `<div id="info">
                <h3>${snap.val().Name}</h3>
                <p>${snap.val().CheckIn}</p>
                </div>`
                }
        });
    })
    
    document.getElementById("night").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                if(snap.val().Location==="3"){
                cardsContainer.innerHTML +=
                `<div id="info">
         <h3>${snap.val().Name}</h3>
         <p>${snap.val().CheckIn}</p>
         </div>`
                }
        });
    })
