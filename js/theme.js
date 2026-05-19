// 主题切换：默认浅色，切换到深色
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  updateIcon();
}

function updateIcon() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var btns = document.querySelectorAll('.theme-toggle');
  for (var i = 0; i < btns.length; i++) {
    btns[i].textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    btns[i].setAttribute('aria-label', isDark ? '\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F' : '\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F');
  }
}

// 初始化：读取 localStorage
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

// 绑定点击事件 + 设置初始图标
document.addEventListener('DOMContentLoaded', function () {
  var btns = document.querySelectorAll('.theme-toggle');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', toggleTheme);
  }
  updateIcon();
});
