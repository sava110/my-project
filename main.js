// 初期のチャットメッセージを表示
window.onload = function() {
    resetChat(); // ページ読み込み時にリセット
};

// チャットボックスにメッセージを追加
function addMessage(message, isUser = false) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    
    if (isUser) {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }
    
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // 新しいメッセージにスクロール
}

// ユーザーの選択肢を処理
function showAnswer(option) {
    // ユーザーのメッセージを表示
    addMessage(`選択肢 ${option}`, true);

    // 次のメッセージ（ボットの応答）を表示
    setTimeout(() => {
        let response = "";

        // 各選択肢に対してボットが返す応答を設定
        switch(option) {
            case 1:
                response = "FAQ1についての回答です。";
                break;
            case 2:
                response = "FAQ2についての回答です。";
                break;
            case 3:
                response = "FAQ3についての回答です。";
                break;
            default:
                response = "もう一度選んでください。";
        }

        addBotMessage(response);
        
        // 次の選択肢を表示
        setTimeout(() => {
            displayNextButtons();
        }, 1000);
    }, 1000);
}

// 次の選択肢を表示
function displayNextButtons() {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = '';  // 現在のボタンを消去

    // 新しい選択肢を表示
    const button1 = document.createElement("button");
    button1.textContent = "さらに詳しく";
    button1.onclick = function() { showAnswer(1); };
    
    const button2 = document.createElement("button");
    button2.textContent = "別のFAQを見たい";
    button2.onclick = function() { showAnswer(2); };

    const button3 = document.createElement("button");
    button3.textContent = "トップに戻る";
    button3.onclick = function() { resetChat(); };

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    buttonContainer.appendChild(button3);
}

// ボットのメッセージを追加
function addBotMessage(message) {
    addMessage(message, false);
}

// チャットをリセットして最初の状態に戻す
function resetChat() {
    const chatBox = document.getElementById("chat-box");
    const buttonContainer = document.getElementById("button-container");

    // チャットボックスの履歴を消去
    chatBox.innerHTML = '';

    // 最初のメッセージを表示
    addBotMessage("こんにちは！質問を選んでください。");

    // 最初の選択肢を表示
    buttonContainer.innerHTML = '';  // 現在のボタンを消去
    const button1 = document.createElement("button");
    button1.textContent = "YYProbe -iOS版について";
    button1.onclick = function() { showAnswer(1); };

    const button2 = document.createElement("button");
    button2.textContent = "YYProbe -Android版について";
    button2.onclick = function() { showAnswer(2); };

    const button3 = document.createElement("button");
    button3.textContent = "YY文字起こしについて";
    button3.onclick = function() { showAnswer(3); };

    const button4 = document.createElement("button");
    button4.textContent = "YYデスクトップについて";
    button4.onclick = function() { showAnswer(4); };

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    buttonContainer.appendChild(button3);
    buttonContainer.appendChild(button4);
}
