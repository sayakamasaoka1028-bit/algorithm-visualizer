let values = [];
const n = 10;
const container = document.getElementById('bar-container');

// 棒グラフを作る関数
function createBars() {
  container.innerHTML = '';
  for (let i = 0; i < n; i++) {
    let value = values[i] || Math.floor(Math.random() * 200) + 20;
    values[i] = value;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = value + 'px';
    container.appendChild(bar);
  }
}

// ランダム生成ボタン
document.getElementById('shuffle').addEventListener('click', () => {
  values = [];
  createBars();
});

// バブルソートのアニメーション
async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]];

        bars[j].style.height = values[j] + 'px';
        bars[j + 1].style.height = values[j + 1] + 'px';
      }

      await new Promise(resolve => setTimeout(resolve, 300));

      bars[j].style.backgroundColor = '#4CAF50';
      bars[j + 1].style.backgroundColor = '#4CAF50';
    }
  }
}

// ソート開始ボタン
document.getElementById('start').addEventListener('click', () => {
  bubbleSort();
});

// 初回表示
createBars();
