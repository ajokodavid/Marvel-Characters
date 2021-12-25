let btn = document.getElementById('btn');

function welcomeClient() {
    alert("Welcome");
    alert("Please feel free to search for any marvel Character");
    alert("Incase you don't see what you searched for, it would be included in the next update");
}

welcomeClient();

btn.addEventListener("click",function(){
    
    const inputName = document.getElementById('inputName').value;
    let image1 = document.getElementById("image1");
    let char_name = document.querySelector(".name");
    let power = document.querySelector(".powers");
    let origin = document.querySelector(".origin"); 

    if(inputName.includes("venom") || inputName.includes("Venom")) {
        image1.setAttribute("src", "images/Venom.jpg");

        char_name.textContent = " Venom";
        power.textContent = " SUPER STRENGTH, REGENERATIVE HEALING, OFFSPRING DETECTION, CONSTITUENT MATTER GENERATION/ MANIPULATION, GENETIC MEMORY, SHAPESHIFTING".toLowerCase();
        origin.textContent = " Klyntar (Gorr's planet)";
    }

    if(inputName.includes("spiderman") || inputName.includes("Spiderman") || inputName.includes("Spider-man") || inputName.includes("Spider man")) {
        image1.setAttribute("src", "images/spiderman.png");

        char_name.textContent = " Spiderman";
        power.textContent = " Superhuman Strength, Superhuman Speed, Superhuman Reflexes, Superhuman Durability, Healing Factor, Spider-Sense Alert, Heightened Senses, Wallcrawling.".toLowerCase();
        origin.textContent = " Queens, New York City";
    }

    if(inputName.includes("ironman") || inputName.includes("Ironman") || inputName.includes("Iron-man") || inputName.includes("Iron man")) {
        image1.setAttribute("src", "images/ironman.png");

        char_name.textContent = " Iron-Man";
        power.textContent = " Superhuman strength, speed, durability, agility, reflexes, and senses Supersonic flight Energy repulsor and missile projection Regenerative life support".toLowerCase();
        origin.textContent = " Malibu, California";
    }

    if(inputName.includes("hulk") || inputName.includes("Hulk")) {
        image1.setAttribute("src", "images/hulk.jpg");

        char_name.textContent = " Hulk";
        power.textContent = " Incredible superhuman strength, durability, healing factor, Becomes more powerful as anger increases".toLowerCase();
        origin.textContent = " Dayton, Ohio";
    }

    if(inputName.includes("ghostrider") || inputName.includes("Ghostrider") || inputName.includes("Ghost-rider") || inputName.includes("Ghost rider")) {
        image1.setAttribute("src", "images/ghost-rider.jpg");

        char_name.textContent = " Ghost-Rider";
        power.textContent = " superhuman speed, strength, durability, and a regenerative healing ability".toLowerCase();
        origin.textContent = " Melbourne";
    }

    if(inputName.includes("blackpanther") || inputName.includes("Blackpanther") || inputName.includes("Black-panther") || inputName.includes("Black panther")) {
        image1.setAttribute("src", "images/black-panther.jpg");

        char_name.textContent = " Black-Panther";
        power.textContent = " Superhuman strength, endurance, speed, agility, reflexes, stamina and senses.".toLowerCase();
        origin.textContent = " Wakanda";
    }

    if(inputName.includes("captainmarvel") || inputName.includes("Captainmarvel") || inputName.includes("Captain-marvel") || inputName.includes("Captain marvel")) {
        image1.setAttribute("src", "images/captain-marvel.jpg");

        char_name.textContent = " Captain Marvel";
        power.textContent = " Superhuman strength, speed, durability, agility, reflexes, senses, and intelligence.".toLowerCase();
        origin.textContent = " New York City";
    }

    if(inputName.includes("thor") || inputName.includes("Thor")) {
        image1.setAttribute("src", "images/thor.jpg");

        char_name.textContent = " Thor";
        power.textContent = " Superhuman strength, endurance, speed, agility, reflexes, stamina and senses.".toLowerCase();
        origin.textContent = " Asgard";
    }

    if(inputName.includes("blackwidow") || inputName.includes("Blackwidow") || inputName.includes("Black-widow") || inputName.includes("Black widow")) {
        image1.setAttribute("src", "images/blackwidow.jpg");

        char_name.textContent = " Black Widow";
        power.textContent = "  Master in the covert arts of espionage, infiltration & subterfuge. Expert martial artist, with exceptional agility & athletic ability. Utilizes advanced weaponry including custom stun batons & Widow's Bite bracelets capable of stunning enemies with electrical discharges.".toLowerCase();
        origin.textContent = " New York City";
    }

    if(inputName.includes("deadpool") || inputName.includes("Deadpool")) {
        image1.setAttribute("src", "images/deadpool.jpeg");

        char_name.textContent = " Deadpool";
        power.textContent = "  A master of martial arts and combat. His powers are derived from his mutant abilities, including enhanced strength, speed, agility, and durability.".toLowerCase();
        origin.textContent = " New York City";
    }

    if(inputName.includes("capatainamerica") || inputName.includes("Capatainamerica") || inputName.includes("Capatain-america") || inputName.includes("Capatain america")) {
        image1.setAttribute("src", "images/captain-america.jpg");

        char_name.textContent = " Captain America";
        power.textContent = "  Superhuman strength, speed, durability, agility, reflexes, senses, and intelligence.".toLowerCase();
        origin.textContent = " New York City";
    }

    if(inputName.includes("wolverine") || inputName.includes("Wolverine")) {
        image1.setAttribute("src", "images/wolverine.jpg");

        char_name.textContent = " Wolverine";
        power.textContent = "  Superhuman strength, speed, durability, agility, reflexes, senses, and intelligence.".toLowerCase();
        origin.textContent = " New York City";
    }
})