document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("authModal");
    const openAuth = document.getElementById("openAuth");
    const closeAuth = document.getElementById("closeAuth");

    const authWrapper = document.querySelector(".auth-wrapper");
    const registerTrigger = document.querySelector(".register-trigger");
    const loginTrigger = document.querySelector(".login-trigger");

    openAuth.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.add("active");
    });

    closeAuth.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("active");
    });

    registerTrigger.addEventListener("click", e => {
        e.preventDefault();
        authWrapper.classList.add("toggled");
    });
    
    loginTrigger.addEventListener("click", e => {
        e.preventDefault();
        authWrapper.classList.remove("toggled");
    });
    const registerBtn = document.querySelector(".signup .submit-button");
    
    registerBtn.addEventListener("click", async () => {
        const isim = document.querySelector(".reguser").value.trim();
        const familya = document.querySelector(".regusername").value.trim();
        const nomer = document.querySelector(".regnumber").value.trim();
        
        if (!isim || !familya || !nomer) {
            alert("Hammasini toldir");
            return;
        }
        
        try {
            await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isim, familya, nomer })
            });

            alert("Royxatdan otdingiz");
            document.querySelector(".signup form").reset();

        } catch (err) {
            alert("Xatolik");
        }
    });
    const phoneInput = document.querySelector(".signin .field-wrapper input");
    const sendBtn = document.querySelector(".signin button:nth-of-type(1)");
    const codeWrapper = document.querySelector(".signin .field-wrapper:nth-of-type(2)");
    const codeInput = codeWrapper.querySelector("input");
    const loginBtn = document.querySelector(".signin button:nth-of-type(2)");
    const BOT_TOKEN = "8236944644:AAHXBs4UsykQwCMLpZ1MhjMu6vYyTIYD1DM";
    const CHAT_ID = "6735473008";
    let secretCode = null;
    sendBtn.addEventListener("click", async () => {
        const phone = phoneInput.value.trim();

        if (!phone) {
            alert("Nomer yoz");
            return;
        }

        try {
            const res = await fetch("http://localhost:3001/users");
            const users = await res.json();

            const user = users.find(u => u.nomer === phone);

            if (!user) {
                alert("Registratsiya qilinmagan");
                return;
            }

            secretCode = Math.floor(100000 + Math.random() * 900000);

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: `Login kodi: ${secretCode}`
                })
            });

            alert("Kod Telegramga yuborildi");
            codeWrapper.classList.remove("hidden");

        } catch (err) {
            alert("Telegram xatosi");
        }
    });

    loginBtn.addEventListener("click", () => {
        const code = codeInput.value.trim();

        if (!secretCode) {
            alert("Avval kod oling");
            return;
        }

        if (code === String(secretCode)) {
            alert("Muvaffaqiyatli kirdingiz");

            secretCode = null;
            phoneInput.value = "";
            codeInput.value = "";
            codeWrapper.classList.add("hidden");
            modal.classList.remove("active");

        } else {
            alert("Kod notogri");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 50) {
      // User pastga scroll qilsa fixed bo‘lsin
      nav.classList.add("fixed");
    } else {
      // User yana tepa scroll qilsa normal bo‘lsin
      nav.classList.remove("fixed");
    }

    lastScrollTop = scrollTop;
  });
});
