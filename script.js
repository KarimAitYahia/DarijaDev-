// تحديد العناصر
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// تحقق من الإعدادات المحفوظة
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.checked = true;
  themeIcon.textContent = '☀️'; // تغيير الأيقونة إلى شمس
}

// تغيير الوضع عند النقر
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  themeIcon.textContent = isDarkMode ? '☀️' : '🌙'; // تغيير الأيقونة بناءً على الوضع
});
document.addEventListener('DOMContentLoaded', function() {
    Prism.highlightAll(); // تأكد من أن Prism.js يعمل بعد تحميل الصفحة
});

// تبديل الوضع المظلم/الفاتح
const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
});

// معالجة تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم من الحقول
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // بيانات المستخدم الصحيحة (يمكن استبدالها بقاعدة بيانات أو API)
    const validUsername = "user";
    const validPassword = "1234";

    // التحقق من صحة البيانات
    if (username === validUsername && password === validPassword) {
        alert("تم تسجيل الدخول بنجاح!");
        document.getElementById('login-screen').classList.remove('active'); // إخفاء شاشة تسجيل الدخول
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});
