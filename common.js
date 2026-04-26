document.addEventListener('DOMContentLoaded', () => {
    // 1. ヘッダーとメニューのHTML構造を定義
const menuHtml = `
<div class="header-bar">
    <div class="app-title">VOLFORCE CALC ∇</div> <div class="menu-btn" id="menuBtn">
        <span></span><span></span><span></span>
    </div>
</div>
    <div class="drawer-overlay" id="overlay"></div>
    <div class="drawer" id="drawer">
        <div class="menu-label">TOP MENU</div>
        <a href="index.html" class="menu-item" id="nav-index">TOPページへ戻る</a>
        
        <div class="menu-label">NAVIGATOR</div>
        <a href="vol-to-score.html" class="menu-item" id="nav-score">目標スコア算出</a>
        <a href="vf-table.html" class="menu-item" id="nav-table">スコア・VF早見表</a>
        <a href="solo-vol.html" class="menu-item" id="nav-solo">単曲VF計算</a>
        <a href="vol-hayami.html" class="menu-item" id="nav-hayami">VF到達目安表</a>
        
        <div class="menu-label">INFORMATION</div>
        <a href="rule.html" class="menu-item" id="nav-rule">利用規約</a>
        <a href="contact.html" class="menu-item" id="nav-contact">お問い合わせ</a>
    </div>`;

    // 2. bodyの先頭に挿入
    document.body.insertAdjacentHTML('afterbegin', menuHtml);

    // 3. メニュー開閉のロジック
    const btn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    const toggleMenu = () => {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    };

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 4. 現在のページをハイライト（.currentを付与）
    const path = window.location.pathname.split("/").pop() || "index.html";
    const navMap = {
        "index.html": "nav-index",
        "vol-to-score.html": "nav-score",
        "vf-table.html": "nav-table",
        "solo-vol.html": "nav-solo",
        "vol-hayami.html": "nav-hayami",
        "rule.html": "nav-rule",
        "contact.html": "nav-contact"
    };
    const currentId = navMap[path];
    if (currentId) {
        document.getElementById(currentId).classList.add('current');
    }
});