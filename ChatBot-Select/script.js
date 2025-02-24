// script.js
function showAnswer(option) {
    var answerContainer = document.getElementById("answer-container");
  
    // 選択肢に応じた答えとさらに選択肢のボタンを表示
    if (option === 'option1') {
      answerContainer.innerHTML = `
        <p>YYProbe -iOS版に関する質問を選んでください:</p>
        <button class="option-btn" onclick="showMoreInfo('order1')">「表示切替」について</button>
        <button class="option-btn" onclick="showMoreInfo('order2')">「集音」について</button>
        <button class="option-btn" onclick="showMoreInfo('order3')">会議に招待したい</button>
      `;
    } else if (option === 'option2') {
      answerContainer.innerHTML = `
        <p>YYProbe -Android版に関する質問を選んでください:</p>
        <button class="option-btn" onclick="showMoreInfo('shipping1')">「会議内容をメール」とは</button>
        <button class="option-btn" onclick="showMoreInfo('shipping2')">「辞書登録」とは</button>
        <button class="option-btn" onclick="showMoreInfo('shipping3')">会議に招待したい</button>
      `;
    }
    // 他のオプションも同様に設定する
  }
  