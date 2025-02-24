// 初期のチャットメッセージを表示
window.onload = function() {
    addBotMessage("こんにちは！YYSystemに関して聞きたい内容を選択してください。");
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
    addMessage(` ${option}`, true);

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
            displayNextButtons(option);
        }, 1000);
    }, 1000);
}

// 次の選択肢を表示
function displayNextButtons(option) {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = '';  // 現在のボタンを消去

    // 新しい選択肢を表示
    const button1 = document.createElement("button");
    button1.textContent = "さらに詳しく";
    button1.onclick = function() { showAnswer(option + 1); };
    
    buttonContainer.appendChild(button1);
}

// ボットのメッセージを追加
function addBotMessage(message) {
    addMessage(message, false);
}
