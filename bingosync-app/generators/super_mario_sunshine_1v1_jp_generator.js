var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
 
var thisVersion = "v3 beta 9";
 
var bingoList = [];
bingoList[1] = [
{ name: "ドルピックタウンの青コイン11枚"},
{ name: "ドルピックタウンの青コイン15枚"},
{ name: "双子ラクガキの青コイン5ペア"},
{ name: "ボス3体撃破"},
{ name: "モンテのむらの100枚コイン"}
];
bingoList[2] = [
{ name: "100枚コインのシャイン2枚"},
{ name: "2ステージでコイン50枚、またはドルピックでコイン150枚"},
{ name: "ビアンコ4 ポンプ禁止"},
{ name: "リコ3 ホバー禁止"}
];
bingoList[3] = [
{ name: "残機18にする"},
{ name: "残機20にする"},
{ name: "リコハーバーの100枚コイン"},
{ name: "赤コインのシャイン3枚"},
{ name: "ビアンコヒルズの隠しシャイン1枚"}
];
bingoList[4] = [
{ name: "ビアンコヒルズの青コイン15枚"},
{ name: "M字から青コイン15枚"},
{ name: "M字から青コイン17枚"},
{ name: "リコハーバーの隠しシャイン1枚"},
{ name: "モンテ3をノーダメージでクリア"}
];
bingoList[5] = [
{ name: "アルバイトの青コイン3枚"},
{ name: "NPCの青コイン5枚"},
{ name: "マンマビーチの青コイン15枚"},
{ name: "シレナビーチのシャイン4枚"},
{ name: "ヒミツステージのシャイン3枚"}
];
bingoList[6] = [
{ name: "ターボノズル1個開放"},
{ name: "隠しシャイン3枚"},
{ name: "シレナビーチの青コイン9枚"},
{ name: "ヒミツ赤2枚 ホバ禁"},
{ name: "敵から青コイン5枚"}
];
bingoList[7] = [
{ name: "ボス再戦ステージ全てクリア1"},
{ name: "リコハーバーのシャイン6枚"},
{ name: "マンマビーチの隠しシャイン2枚"},
{ name: "ターボノズル1個開放"},
{ name: "ビアンコヒルズの100枚コイン"}
];
bingoList[8] = [
{ name: "ビアンコヒルズの青コイン20枚"},
{ name: "モンテのむらの青コイン16枚"},
{ name: "ロケットノズル2つ解放"},
{ name: "マンマビーチのシャイン4枚"},
{ name: "マンマでシャイン5枚、または金鳥シャイン2枚"},
{ name: "モンテのむらのシャイン4枚"}
];
bingoList[9] = [
{ name: "ボス4種類撃破"},
{ name: "赤コインのシャイン4枚"},
{ name: "リコハーバーの青コイン23枚"},
{ name: "青い鳥の青コイン5枚"},
{ name: "ピンナパークの青コイン12枚"}
];
bingoList[10] = [
{ name: "ボス4体撃破"},
{ name: "敵から青コイン7枚"},
{ name: "ボスハナチャン撃破（マンマ3）"},
{ name: "シレナビーチの100枚コイン"}
];
bingoList[11] = [
{ name: "ドルピックタウンのシャイン8枚"},
{ name: "ドルピックタウンのシャイン9枚"},
{ name: "シレナビーチの隠しシャイン1枚"},
{ name: "ヒミツステージのシャイン4枚"},
{ name: "双子ラクガキの青コイン7ペア"}
];
bingoList[12] = [
{ name: "ピンナパークの隠しシャイン1枚"},
{ name: "ピンナのバスケット青全回収、またはバイト青全回収"},
{ name: "6回土管に入りその先でシャイン回収2"},
{ name: "ボス5体撃破"}
];
bingoList[13] = [
{ name: "ピンナ4 ショットガン禁止"},
{ name: "ピンナ5を裏側からホバー禁止でクリア"},
{ name: "モンテのむらの隠しシャイン1枚"},
{ name: "2ステージで青20枚ずつ"}
];
bingoList[14] = [
{ name: "ベルのシャインを2枚取得"},
{ name: "毒川 壁抜け禁止"},
{ name: "ドルピック含め2ステージでヨッシーに乗る"},
{ name: "隠しシャイン4枚"},
{ name: "赤コインのシャイン5枚"}
];
bingoList[15] = [
{ name: "ピンナパークの100枚コイン"},
{ name: "ヒミツ内部で100枚コインのシャイン取得"},
{ name: "ピンナパークのニセマリオ撃破"},
{ name: "隠しシャイン5枚"}
];
bingoList[16] = [
{ name: "青い鳥の青コイン7枚"},
{ name: "マンマビーチの100枚コイン"},
{ name: "ピンナ以外で蝶青コイン"},
{ name: "NPCの青コイン8枚、またはリコ8クリア"},
{ name: "ロケットノズル3つ解放"}
];
bingoList[17] = [
{ name: "ヒミツステージのシャイン5枚"},
{ name: "5ステージでシャイン2枚ずつ"},
{ name: "ビアンコヒルズのシャイン5枚"},
{ name: "シレナビーチの青コイン18枚"}
];
bingoList[18] = [
{ name: "マーレのいりえの青コイン12枚"},
{ name: "各ステージからシャインを1枚ずつ取得"},
{ name: "2ステージでシャイン5枚ずつ"},
{ name: "チョロプーを2匹とも倒してシャインを取る"}
];
bingoList[19] = [
{ name: "赤コインのシャイン6枚"},
{ name: "マーレのいりえの100枚コイン"},
{ name: "マーレのいりえのシャイン4枚"},
{ name: "シャイン26枚"}
];
bingoList[20] = [
{ name: "ウナギ撃破（マーレ4）"},
{ name: "マーレのいりえの青コイン16枚"},
{ name: "100枚コインのシャイン3枚"},
{ name: "ヒミツ内でシャイン7枚取得"}
];
bingoList[21] = [
{ name: "任意の1ステージからシャイン8枚取得（ドルピックタウン以外）"},
{ name: "ドルピック以外でシャイン12枚"},
{ name: "ドルピックでシャイン12枚(青換金可)"},
{ name: "ドルピックでシャイン15枚(青換金可)"},
{ name: "青コイン合計80枚"}
];
bingoList[22] = [
{ name: "3ステージでシャイン4枚ずつ"},
{ name: "4ステージでシャイン3枚ずつ"},
{ name: "1ステージで隠しシャイン2枚(マンマ禁止)"},
{ name: "ターボノズル2つ解放"}
];
bingoList[23] = [
{ name: "偽マリオのシャイン1枚"},
{ name: "モンテのむらの隠しシャイン1枚"},
{ name: "モンテマンレース2つ"},
{ name: "隠しシャイン6枚"}
];
bingoList[24] = [
{ name: "青コイン合計40枚"},
{ name: "青コイン合計45枚"},
{ name: "青コイン合計50枚"}
];
bingoList[25] = [
{ name: "青コイン合計60枚"},
{ name: "青コイン合計65枚"},
{ name: "青コイン合計70枚"}
];