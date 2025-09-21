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

// バブルソート
async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  let n = values.length;
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

// 選択ソート
async function selectionSort() {
  const bars = document.querySelectorAll('.bar');
  let n = values.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    bars[minIdx].style.backgroundColor = 'red';
    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = 'yellow';
      await new Promise(resolve => setTimeout(resolve, 300));
      if (values[j] < values[minIdx]) {
        bars[minIdx].style.backgroundColor = '#4CAF50';
        minIdx = j;
        bars[minIdx].style.backgroundColor = 'red';
      } else {
        bars[j].style.backgroundColor = '#4CAF50';
      }
    }
    if (minIdx !== i) {
      [values[i], values[minIdx]] = [values[minIdx], values[i]];
      bars[i].style.height = values[i] + 'px';
      bars[minIdx].style.height = values[minIdx] + 'px';
    }
    bars[i].style.backgroundColor = '#4CAF50';
  }
}

// 挿入ソート
async function insertionSort() {
  const bars = document.querySelectorAll('.bar');
  let n = values.length;
  for (let i = 1; i < n; i++) {
    let key = values[i];
    let j = i - 1;
    bars[i].style.backgroundColor = 'red';
    await new Promise(resolve => setTimeout(resolve, 300));
    while (j >= 0 && values[j] > key) {
      bars[j].style.backgroundColor = 'yellow';
      values[j + 1] = values[j];
      bars[j + 1].style.height = values[j + 1] + 'px';
      await new Promise(resolve => setTimeout(resolve, 300));
      bars[j].style.backgroundColor = '#4CAF50';
      j--;
    }
    values[j + 1] = key;
    bars[j + 1].style.height = key + 'px';
    bars[i].style.backgroundColor = '#4CAF50';
  }
}

// ソート開始ボタン
document.getElementById('start').addEventListener('click', () => {
  const algo = document.getElementById('algorithm').value;
  if (algo === 'bubble') bubbleSort();
  else if (algo === 'selection') selectionSort();
  else if (algo === 'insertion') insertionSort();
});

// 初回表示
createBars();
