let btn = document.getElementById('btn');


btn.addEventListener("click",function(){
    
    const inputName = document.getElementById('inputName').value;
    let image1 = document.getElementById("image1");
    let char_name = document.querySelector(".name");
    let power = document.querySelector(".powers");
    let origin = document.querySelector(".origin"); 

    if(inputName.includes("venom")) {
        image1.setAttribute("src", "images/Venom.jpg");

        char_name.textContent = " Venom";
        power.textContent = " SUPER STRENGTH, REGENERATIVE HEALING, OFFSPRING DETECTION, CONSTITUENT MATTER GENERATION/ MANIPULATION, GENETIC MEMORY, SHAPESHIFTING".toLowerCase();
        origin.textContent = " Klyntar (Gorr's planet)";
    }

    if(inputName.includes("spiderman")) {
        image1.setAttribute("src", "images/spiderman.png");

        char_name.textContent = " Spiderman";
        power.textContent = " Superhuman Strength, Superhuman Speed, Superhuman Reflexes, Superhuman Durability, Healing Factor, Spider-Sense Alert, Heightened Senses, Wallcrawling.".toLowerCase();
        origin.textContent = " Queens, New York City";
    }

    if(inputName.includes("ironman")) {
        image1.setAttribute("src", "images/ironman.png");

        char_name.textContent = " Iron-Man";
        power.textContent = " Superhuman strength, speed, durability, agility, reflexes, and senses Supersonic flight Energy repulsor and missile projection Regenerative life support".toLowerCase();
        origin.textContent = " Malibu, California";
    }

    if(inputName.includes("hulk")) {
        image1.setAttribute("src", "images/hulk.jpg");

        char_name.textContent = " Hulk";
        power.textContent = " Incredible superhuman strength, durability, healing factor, Becomes more powerful as anger increases".toLowerCase();
        origin.textContent = " Dayton, Ohio";
    }

    if(inputName.includes("ghostrider")) {
        image1.setAttribute("src", "images/ghost-rider.jpg");

        char_name.textContent = " Ghost-Rider";
        power.textContent = " superhuman speed, strength, durability, and a regenerative healing ability".toLowerCase();
        origin.textContent = " Melbourne";
    }
})