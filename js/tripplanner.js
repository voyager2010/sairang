const planBtn = document.getElementById("planBtn");

planBtn.addEventListener("click", function () {

    let destination = document.getElementById("destination").value;
    let departure = document.getElementById("departure").value;
    let returnDate = document.getElementById("return").value;
    let travellers = document.getElementById("travellers").value;
    let budget = document.getElementById("budget").value;
    let transport = document.getElementById("transport").value;
    let hotel = document.getElementById("hotel").value;
    let trip = document.getElementById("trip").value;

    if (destination == "Select Destination") {
        alert("Please select a destination.");
        return;
    }

    let places = "";
    let food = "";
    let tips = "";

    switch (destination) {

        case "Goa":
            places = "Baga Beach, Fort Aguada, Dudhsagar Falls";
            food = "Fish Curry, Bebinca, Prawn Balchão";
            tips = "Carry sunscreen and beachwear.";
            break;

        case "Hampi":
            places = "Virupaksha Temple, Stone Chariot, Matanga Hill";
            food = "Bisi Bele Bath, Jolada Roti";
            tips = "Wear comfortable shoes.";
            break;

        case "Kashmir":
            places = "Dal Lake, Gulmarg, Sonamarg";
            food = "Rogan Josh, Kahwa";
            tips = "Carry warm clothes.";
            break;

        case "Jaipur":
            places = "Hawa Mahal, Amber Fort, City Palace";
            food = "Dal Baati Churma, Ghewar";
            tips = "Visit forts early morning.";
            break;

        case "Taj Mahal":
            places = "Taj Mahal, Agra Fort, Mehtab Bagh";
            food = "Petha, Bedai, Mughlai Food";
            tips = "Visit at sunrise for the best view.";
            break;

        case "Munnar":
            places = "Tea Gardens, Eravikulam Park, Mattupetty Dam";
            food = "Kerala Sadya, Appam";
            tips = "Carry a light jacket.";
            break;

        case "Andaman":
            places = "Radhanagar Beach, Havelock Island";
            food = "Seafood, Fish Curry";
            tips = "Carry swimwear and sunscreen.";
            break;

        case "Gateway of India":
            places = "Gateway of India, Marine Drive, Elephanta Caves";
            food = "Vada Pav, Pav Bhaji";
            tips = "Visit in the evening for sea views.";
            break;
    }

    document.getElementById("summary").innerHTML = `

        <h3 style="color:#0D9488; margin-bottom:20px;">
            Your Trip is Ready 🎉 

        <p><b>📍 Destination :</b> ${destination}</p>

        <p><b>📅 Departure :</b> ${departure}</p>

        <p><b>📅 Return :</b> ${returnDate}</p>

        <p><b>👨‍👩‍👧 Travelers :</b> ${travellers}</p>

        <p><b>💰 Budget :</b> ${budget}</p>

        <p><b>🚗 Transport :</b> ${transport}</p>

        <p><b>🏨 Hotel :</b> ${hotel}</p>

        <p><b>🎒 Trip Type :</b> ${trip}</p>

        <hr>

        <h3 style="color:#0D9488;">Recommended Places</h3>

        <p>${places}</p>

        <h3 style="color:#0D9488;">Famous Food</h3>

        <p>${food}</p>

        <h3 style="color:#0D9488;">Travel Tips</h3>

        <p>${tips}</p>

    `;

});