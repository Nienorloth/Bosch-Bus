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
    let button_block = document.getElementById('mapGraphic');
    

button_block.addEventListener('click', () => {
   
        document.getElementById('myChart').style.display = 'none';
        document.getElementById('map').style.display = 'block';
      
    
});
let button_block2 = document.getElementById('mapGraphic');

button_block2.addEventListener('click', () => {
   
        document.getElementById('myChart').style.display = 'none';
        // document.getElementById('mapGraphic').style.display = 'none';
      
    
});

dbRef.on("child_added", snap => {
        // const li = document.createElement("li");
        cardsContainer.innerHTML +=
         `<h3>${snap.val().Name}</h3>
         <p>${snap.val().CheckIn}</p>
         <p>${snap.val().Location}</p>`
        // li.innerText = snap.val().Name;
        // cardsContainer.appendChild(li);
    });
    
//     const showData = () => {
//         usersArray = snap.val();
//         usersArray.map(user => {
//             cardsContainer.innerHTML+=
//         `<h3>${user.Name}</h3>`
//         });
    
//     showButton.addEventListener("click", showData);
    

