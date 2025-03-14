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
            case 1000:
                response = "YYProbe - iOS版についての詳細情報です。";
                break;
            case 2000:
                response = "YYProbe - Android版についての詳細情報です。";
                break;
            case 3000:
                response = "YY文字起こしについての詳細情報です。";
                break;
            case 4000:
                response = "YYデスクトップについての詳細情報です。";
                break;
            case 1100:
                response = "YYProbe -iOS版に関するFAQの一覧です。";
                break;
            case 1101:
                response = "複数人で同時利用可能な会議コミュニケーションアプリです。<br>会議ルームを作成し、そこに多人数で参加する事で音声認識やキーボードを使ってコミュニケーションが取れるアプリです。<br><br>・会議ルームに複数人で参加可能<br>・会議内容をURL発行してブラウザで共有可能<br>・文字起こし内容をメール送信可能<br>・無料プランは利用時間制限あり<br>・法人プランあり<br>・法人プランにはYYAnaliticsと呼ぶ管理システムがあり、各種設定や会話分析、リアルタイム文字編集などが可能です。";
                break;
            case 1102:
                response = "無料プランは利用時間制限があります。<br>詳細はアプリ内のお知らせ記事をご確認ください。<br>法人版は利用時間制限はありません。";
                break;
            case 1103:
                response ="音声を録音します。<br>チャット画面で発言をタップすると録音された音声を再生可能です。<br>また、法人版は音声録音を「しない」設定も可能です。";
                break;
            case 1104:
                response ="可能です。編集方法は2種類あります。<br>①YYProbe / YYデスクトップ字幕で発言をタップして編集<br>②YYAnalitics(PCブラウザアプリ)で編集※<br>※パソコンで複数人でリアルタイム編集可能なツール<br>現時点では法人版のみ提供となっております。";
                break;
            case 3100:
                response ="YY文字起こしに関するFAQの一覧です。";
                break;
            case 3101:
                response ="音声認識開始すると自動で録音されます。<br>録音データは、履歴画面から確認可能です。";
                break;
            case 3102:
                response ="オフラインで使用することが可能です。";
                break;
            case 3103:
                response ="YY文字起こしは個人がいつでも文字起こしをすぐに利用できるように、通信が出来ない場面を想定してオフラインの音声認識エンジンを準備しております。<br>インターネット通信がないとき、または機内モードでご使用いただけます。";
                break;
            case 3104:
                response ="全てユーザーの端末に保存されます。<br>以下の一部のデータはサーバーへ送信されます。<br>・オンラインの音声認識エンジンの場合、クラウドで音声認識を行うため、音声データがサーバーへ送信されます。<br>送信したくない場合は、オフラインの音声認識エンジンを選択可能です。<br>・翻訳をONにした場合、クラウドの翻訳機能を使うため認識結果のテキストをクラウドの翻訳システムに送信します。";
                break;
            default:
                response = "Error";
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
        case 1000:
            // 「YYProbe - iOS版について」を選択した場合のボタン
            addButton("YYProbe - iOS版に関するFAQ", 1100);
            addButton("YYProbe - iOS版の使い方", 1200);
            addButton("次のステップ", 5);
            break;
        case 2000:
            // 「YYProbe - Android版について」を選択した場合のボタン
            addButton("YYProbe - Android版に関するFAQ", 2100);
            addButton("YYProbe - Android版の使い方", 2200);
            addButton("次のステップ", 5);
            break;
        case 3000:
            // 「YY文字起こしについて」を選択した場合のボタン
            addButton("YY文字起こしに関するFAQ", 3100);
            addButton("YY文字起こしの使い方", 3200);
            addButton("次のステップ", 5);
            break;
        case 4000:
            // 「YYデスクトップについて」を選択した場合のボタン
            addButton("YYデスクトップに関するFAQ", 4100);
            addButton("YYデスクトップの使い方", 4200);
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
        case 1100:
            // 「YYProbe -iOS版に関するFAQ」を選択した場合
            addButton("YYProbe -iOS版はどんなアプリ?",1101);
            addButton("利用時間制限はある？",1102);
            addButton("録音されている？",1103)
            addButton("発言を編集することは可能?",1104);
            addButton("トップに戻る",0);
            break;
        case 3100:
            //　「YY文字起こしに関するFAQ」を選択した場合
            addButton("内容の録音はできる？",3101);
            addButton("YY文字起こしはオフラインで使用可能?",3102);
            addButton("オフライン文字認識エンジンについて",3103);
            addButton("データはどこに保存される？",3104);
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

    // ボタンがクリックされたときに無効化
    button.onclick = function() {
        // ボタンを無効化
        button.disabled = true;

        // 選択肢が0の場合はチャットをリセット
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

function addBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    
    // ボットのメッセージに改行を追加
    messageDiv.innerHTML = message.replace(/\n/g, "<br>");

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// チャットをリセットして最初の状態に戻す
function resetChat() {
    const chatBox = document.getElementById("chat-box");
    const buttonContainer = document.getElementById("button-container");

    // チャットボックスの履歴を消去
    chatBox.innerHTML = '';

    // 最初のメッセージを表示
    addBotMessage("YYSystemのチャットをご利用いただきありがとうございます。<br>該当の項目を選択してください。");

    // 最初の選択肢を表示
    buttonContainer.innerHTML = '';  // 現在のボタンを消去
    addButton("YYProbe -iOS版について", 1000);
    addButton("YYProbe -Android版について", 2000);
    addButton("YY文字起こしについて", 3000);
    addButton("YYデスクトップについて", 4000);
}
