document.getElementById("whatsappBtn").addEventListener("click", function() {
  // ✅ WhatsApp requires country code (without + or leading 0)
  const phoneNumber = "212643994083"; 
  const message = encodeURIComponent("مرحباً، أود معرفة المزيد حول العمليات.");
  
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
});
