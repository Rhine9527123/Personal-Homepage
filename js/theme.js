// 主题切换：读取 localStorage，默认跟随深色
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? '' : 'light';
  if (next) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
  updateIcon(next !== 'light');
}

function updateIcon(isDark) {
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? '切换到浅色模式' : '切换到深色模式');
  });
}

// 页面加载后设置图标
document.addEventListener('DOMContentLoaded', function () {
  var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  updateIcon(isDark);
});
