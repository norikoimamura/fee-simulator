// 見積フォーム

// フォーム取得
const form = document.getElementById('estimate_form');

// 合計取得
const totalElement = document.getElementById('total');

function calctotal() {
    // 初期化　なぜ必要？　リセットとはまた違う？　※初期化
    let total = 0;

    // nameをfirstにしているところを取得　※querySelector
    const first = document.querySelector('input[name="first"]:checked');

    // firstで選択したものを総合計totalに加算　※total +=以降　Number
    if (first) total += Number(first.value);

    // secondも同様に
    const second = document.querySelector('input[name="second"]:checked');

    if (second) total += Number(second.value);

    // 選択したものによって総合計を更新　※innerText ¥{total}
    totalElement.innerText = `Total: ¥${total}`
}

form.addEventListener('change', calctotal);

// モーダル開く
const btn = document.querySelectorAll(".modal_toggle");
btn.forEach(function(btn) {
    btn.onclick = function() {
        const modalAttribute = btn.getAttribute('data-modal');
        const modalActive = document.getElementById(modalAttribute);
        modalActive.classList.add('is-active');
    };
});

// モーダル閉じる
const modalClose = document.querySelectorAll(".modal_close");
modalClose.forEach(function(btn) {
    btn.onclick = function() {
        const modal = btn.closest('.modal');
        modal.classList.remove('is-active');
    };
});

// 送信

// let form = document.getElementById('form');
// ↑一番上でform取得しているので不要？
let log = document.getElementById('log');

form.addEventListener('submit', () => {
    log.textContent = '送信されました！';
});