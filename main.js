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
function showAnswer(option, optionText) {
    // ユーザーのメッセージを表示
    addMessage(`${optionText}`, true);

    // 次のメッセージ（ボットの応答）を表示
    setTimeout(() => {
        let response = "";

        // 各選択肢に対してボットが返す応答を設定
        switch(option) {
            case 1:
                response = "YYProbe - iOS版についての詳細情報です。";
                break;
            case 2:
                response = "YYProbe - Android版についての詳細情報です。";
                break;
            case 3:
                response = "YY文字起こしについての詳細情報です。";
                break;
            case 4:
                response = "YYデスクトップについての詳細情報です。";
                break;
            case 15:
                response = "YYProbe -iOS版に関するFAQの一覧です。";
                break;
            case 16:
                response = "無料プランは利用時間制限があります。詳細はアプリ内のお知らせ記事をご確認ください。法人版は利用時間制限はありません。";
                break;
            default:
                response = "もう一度選んでください。";
        }

        addBotMessage(response);
        
        // 次の選択肢を表示
        setTimeout(() => {
            displayNextButtons(option); // 選択肢に応じて異なるボタンを表示
        }, 500);
    }, 500);
}

// 次の選択肢を表示
function displayNextButtons(option) {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = '';  // 現在のボタンを消去

    // 各選択肢に応じた異なるボタンを表示
    switch(option) {
        case 1:
            // 「YYProbe - iOS版について」を選択した場合のボタン
            addButton("YYProbe - iOS版に関するFAQ", 15);
            addButton("YYProbe - iOS版の使用方法", 2);
            addButton("次のステップ", 5);
            break;
        case 2:
            // 「YYProbe - Android版について」を選択した場合のボタン
            addButton("YYProbe - Android版に関するFAQ", 1);
            addButton("YYProbe - Android版の使用方法", 2);
            addButton("次のステップ", 5);
            break;
        case 3:
            // 「YY文字起こしについて」を選択した場合のボタン
            addButton("YY文字起こしの設定方法", 1);
            addButton("YY文字起こしの使い方", 2);
            addButton("次のステップ", 5);
            break;
        case 4:
            // 「YYデスクトップについて」を選択した場合のボタン
            addButton("YYデスクトップの設定方法", 1);
            addButton("YYデスクトップの使用方法", 2);
            addButton("次のステップ", 5);
            break;
        case 5:
            // 「次のステップ」を選択した場合のボタン
            addButton("関連情報", 6);
            addButton("フィードバックを送る", 7);
            addButton("トップに戻る", 0);
            break;
        case 6:
            // 「関連情報」を選択した場合のボタン
            addButton("YYProbe 最新情報", 8);
            addButton("YY文字起こしのアップデート", 9);
            addButton("トップに戻る", 0);
            break;
        case 7:
            // 「フィードバックを送る」を選択した場合のボタン
            addButton("フィードバックフォームを送る", 10);
            addButton("トップに戻る", 0);
            break;
        case 8:
            // 「YYProbe 最新情報」を選択した場合
            addButton("YYProbe - iOS版 更新情報", 11);
            addButton("YYProbe - Android版 更新情報", 12);
            addButton("トップに戻る", 0);
            break;
        case 9:
            // 「YY文字起こしのアップデート」を選択した場合
            addButton("最新のYY文字起こし技術", 13);
            addButton("YY文字起こしの新機能", 14);
            addButton("トップに戻る", 0);
            break;
        case 15:
            // 「YYProbe -iOS版に関するFAQ」を選択した場合
            addButton("利用時間制限はある？",16);
            addButton("トップに戻る",0);
            break;
        default:
            // トップに戻るボタンのみ表示
            addButton("トップに戻る", 0);
    }
}

// ボタンを追加
function addButton(text, option) {
    const buttonContainer = document.getElementById("button-container");
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = function() {
        if (option === 0) {
            resetChat(); // トップに戻る
        } else {
            showAnswer(option, text); // 次の選択肢に進む
        }
    };
    buttonContainer.appendChild(button);
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
    addButton("YYProbe -iOS版について", 1);
    addButton("YYProbe -Android版について", 2);
    addButton("YY文字起こしについて", 3);
    addButton("YYデスクトップについて", 4);
}
