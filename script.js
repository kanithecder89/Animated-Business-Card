document.addEventListener("DOMContentLoaded", function () {
    const productImages = {
        "sofa": ["sofa3.jpg", "sofa4.jpg", "sofa5.jpg"],
        "table": ["table2.jpg", "table3.jpg", "table4.jpg"]
    };

    let sofaIndex = 0;
    let tableIndex = 0;

    function changeProductImages() {
        // Sofa image change
        let sofaImage = document.querySelector('.product img[alt="Luxury Sofa"]');
        if (sofaImage) {
            sofaImage.src = productImages.sofa[sofaIndex];
            sofaIndex = (sofaIndex + 1) % productImages.sofa.length;
        }

        // Table image change
        let tableImage = document.querySelector('.product img[alt="Wooden Dining Table"]');
        if (tableImage) {
            tableImage.src = productImages.table[tableIndex];
            tableIndex = (tableIndex + 1) % productImages.table.length;
        }
    }

    // Har 4 second mein images change hongi
    setInterval(changeProductImages, 1000);
});






        const images = ['sofa3.jpg', 'sofa4.jpg', 'sofa5.jpg', 'table2.jpg', 'table3.jpg', 'table4.jpg'];
        let currentIndex = 0;
    
        function changeImage() {
            let hero = document.getElementById('heroSection');
            hero.style.opacity = 1;  // Fade out
            setTimeout(() => {
                hero.style.backgroundImage = `url(${images[currentIndex]})`;
                hero.style.opacity = 1; // Fade in (8 galat value thi)
            }, 500);
            currentIndex = (currentIndex + 1) % images.length;
        }
        
        setInterval(changeImage, 3000); // Change image every 3 seconds
    
        function showSection(sectionId) {
            // Sabhi sections ko hide karein
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });
    
            // Sirf selected section show karein
            document.getElementById(sectionId).style.display = 'block';
        }


       
        function addToFlipkartCart() {
        let flipkartCartUrl = "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART";
        window.location.href = flipkartCartUrl;
    }

    function addToAmazonCart(asin) {
        let amazonCartUrl = `https://www.amazon.in/gp/aws/cart/add.html?ASIN=${asin}&Quantity=1`;
        window.location.href = amazonCartUrl;
    }

        // Wait for DOM to load before attaching event listeners
        document.addEventListener("DOMContentLoaded", function () {
            let cartCount = 0;
            const cartCountDisplay = document.getElementById('cart-count');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
            addToCartButtons.forEach(button => {
                button.addEventListener('click', () => {
                    cartCount++;
                    cartCountDisplay.textContent = cartCount;
                    alert("Item added to cart!");
                });
            });
    
            const shopNowButton = document.getElementById("shop-now");
            if (shopNowButton) {
                shopNowButton.addEventListener("click", function() {
                    window.location.href = "https://gumroad.com/l/example";
                });
            }

            
    document.addEventListener("DOMContentLoaded", function () {
        const subscribeButton = document.getElementById("subscribe-now");

        if (subscribeButton) {
            subscribeButton.addEventListener("click", function () {
                let email = document.getElementById("email").value;
                
                if (email.includes("@") && email.includes(".")) {
                    alert("Thank you for subscribing! You got a 10% discount.");
                    
                    // Sabhi product prices ko update karega
                    let productPrices = document.querySelectorAll(".product p");
                    
                    productPrices.forEach(priceElement => {
                        let priceText = priceElement.innerText.replace("₹", "").replace(",", ""); // ₹ aur , hataye
                        let price = parseFloat(priceText); // Number mai convert kare
                        let discountedPrice = (price * 0.9).toFixed(2); // 10% discount apply kare
                        priceElement.innerText = `₹${discountedPrice}`; // Updated price dikhaye
                    });

                } else {
                    alert("Please enter a valid email address.");
                }
            });
        }
    });



          
    
            const subscribeButton = document.getElementById("subscribe-now");
            if (subscribeButton) {
                subscribeButton.addEventListener("click", function() {
                    let email = document.getElementById("email").value;
                    if (email.includes("@") && email.includes(".")) {
                        alert("Thank you for subscribing!");
                    } else {
                        alert("Please enter a valid email address.");
                    }
                });
            }

           
    
            function countdown() {
                let timer = document.getElementById('timer');
                let timeLeft = 8130;
                setInterval(() => {
                    if (timeLeft <= 0) {
                        timer.innerText = "Sale Ended";
                    } else {
                        let hours = Math.floor(timeLeft / 3600);
                        let minutes = Math.floor((timeLeft % 3600) / 60);
                        let seconds = timeLeft % 60;
                        timer.innerText = `${hours}:${minutes}:${seconds}`;
                        timeLeft--;
                    }
                }, 1000);
            }
            countdown();
        });


        function addToCart() {
            alert("Product added to cart!");
        }

        document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const header = document.querySelector("header");

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        header.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙"; // Moon icon for dark mode
        }
    });
});





        
    // function sendMessage() {
    //     let userMsg = document.getElementById("userInput").value;
    //     let chat = document.getElementById("messages");
    //     chat.innerHTML += `<p>User: ${userMsg}</p>`;
    //     document.getElementById("userInput").value = "";

    //     // Fake AI Reply (for now)
    //     setTimeout(() => {
    //         chat.innerHTML += `<p>Bot: Sorry, I am still learning!</p>`;
    //     }, 1000);
    // }




        // Load saved language when page refreshes
        // window.onload = function() {
        //     let savedLang = localStorage.getItem("selectedLanguage") || "en";
        //     document.getElementById("languageSelector").value = savedLang;
        //     document.getElementById("title").textContent = translations[savedLang].title;
        //     document.getElementById("description").textContent = translations[savedLang].description;
        // };

       

     