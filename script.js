(function() {
    // აქ ჩასვი შენი Public Key (Account-ში რომ არის)
    emailjs.init("z7Rbd60fFzIzLwfFx"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // ეს აგზავნის მონაცემებს EmailJS-ში
    emailjs.sendForm('service_1nq3807', 'template_dt0l18t', this)
        .then(function() {
            const translations = {
    ka: { 
        subtitle: "შეავსეთ ფორმა შეკვეთისთვის", 
        labelName: "სახელი და გვარი", 
        labelPhone: "ტელეფონის ნომერი", 
        labelColor: "მასალა / ფერი", 
        btn: "შეკვეთის გაგზავნა", 
        placeholderName: "მაგ: გიორგი ბერიძე", 
        placeholderColor: "მაგ: მუხა, კაკალი...", // <-- ქართული
        success: "მონაცემები წარმატებით გაიგზავნა!", 
        langShort: "KA", 
        flag: "ge" 
    },
    en: { 
        subtitle: "Fill out the order form", 
        labelName: "Full Name", 
        labelPhone: "Phone Number", 
        labelColor: "Material / Color", 
        btn: "Send Order", 
        placeholderName: "e.g. John Doe", 
        placeholderColor: "e.g. Oak, Walnut...", // <-- ინგლისური
        success: "Data sent successfully!", 
        langShort: "EN", 
        flag: "us" 
    },
    ru: { 
        subtitle: "Заполните форму заказа", 
        labelName: "Имя и фамилия", 
        labelPhone: "Номер телефона", 
        labelColor: "Материал / Цвет", 
        btn: "Отправить заказ", 
        placeholderName: "напр. Иван Иванов", 
        placeholderColor: "напр. Дуб, Орех...", // <-- რუსული
        success: "Данные успешно отправлены!", 
        langShort: "RU", 
        flag: "ru" 
    }
};

let currentLang = 'ka';

function changeLanguage(lang) {
    currentLang = lang;
    
    // ტექსტების შეცვლა
    document.getElementById('subtitle').innerText = translations[lang].subtitle;
    document.getElementById('label-name').innerText = translations[lang].labelName;
    document.getElementById('label-phone').innerText = translations[lang].labelPhone;
    document.getElementById('label-color').innerText = translations[lang].labelColor;
    document.getElementById('submit-btn').innerText = translations[lang].btn;
    
    // Placeholder-ების შეცვლა (ორივე ველისთვის)
    document.getElementById('input-name').placeholder = translations[lang].placeholderName;
    document.getElementById('input-color').placeholder = translations[lang].placeholderColor; // <-- ეს ხაზი დაემატა
    
    // ჩამოსაშლელი ღილაკის ვიზუალის შეცვლა
    const activeBtn = document.getElementById('active-lang');
    activeBtn.innerHTML = `<img src="https://flagcdn.com/w40/${translations[lang].flag}.png"> ${translations[lang].langShort}`;
}

(function() {
    emailjs.init("ვახოს_PUBLIC_KEY"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerText;
    btn.innerText = "Sending...";
    btn.disabled = true;

   emailjs.sendForm('service_1nq3807', 'template_dt0l18t', this)
        .then(function() {
            alert(translations[currentLang].success);
            document.getElementById('contact-form').reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, function(error) {
            alert("Error: " + JSON.stringify(error));
            btn.innerText = originalText;
            btn.disabled = false;
        });
});
