﻿var WSList;

function defaultArray(){
  WSList = new Array();
  WSList.push({
    shuzoku:"アクエフ",
    skill:"ファウルウォーター",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"ドラウン、ヘヴィ"
  });
  WSList.push({
    shuzoku:"アクエフ",
    skill:"ペステレントプルーム",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"悪疫、暗闇、魔法防御力ダウン"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"トータスストンプ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    flg:true,
    tuika:"防御力ダウン"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"甲羅強化",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"防御力アップ"
  });
  WSList.push({
    shuzoku:"アダマンタス",
    skill:"アクアブレス",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:""
  });
  WSList.push({
    shuzoku:"アプカル",
    skill:"ビークランジ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"アプカル",
    skill:"ウィングスラップ",
    charge:2,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"重力",
    renkei2:"溶解",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"マンティブルバイト",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"サンドピット",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"バインド(1m30s)"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"サンドブラスト",
    charge:2,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇(命中-40 2m15s)"
  });
  WSList.push({
    shuzoku:"アントリオン",
    skill:"ベノムスプレー",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-31HP/3sec 2m15s)"
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"フットキック",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"爪旋風脚",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"土煙",
    charge:1,
    shubetu:"魔法",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇"
  });
  WSList.push({
    shuzoku:"ウサギ",
    skill:"ワイルドカロット",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"HP回復"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ニンブルスナップ",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"サイクロテール",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ガイストウォール",
    charge:1,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"ナビングノイズ",
    charge:1,
    shubetu:"弱体",
    zokusei:"雷",
    renkei1:"",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"エフト",
    skill:"トクシックスピット",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-23HP/3sec) 4m30s"
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"頭突き",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"シープチャージ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"レイジ",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"バーサク(攻+50% 防-50%) 4m30s"
  });
  WSList.push({
    shuzoku:"大羊",
    skill:"シープソング",
    charge:2,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"睡眠 30s - 1m"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"フロッグキック",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"収縮",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"スポア",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"マヨイタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"シビレタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"オドリタケ",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"病気"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"サイレスガス",
    charge:3,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"静寂"
  });
  WSList.push({
    shuzoku:"キノコ",
    skill:"ダークスポア",
    charge:3,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"ビッグシザー",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"バブルシャワー",
    charge:1,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"STRダウン"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"メタルボディ",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"ストンスキン"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"シザーガード",
    charge:2,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"防御力アップ"
  });
  WSList.push({
    shuzoku:"クラブ",
    skill:"バブルカーテン",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"シェル"
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"レイザーファング",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"クローサイクロン",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"剣虎",
    skill:"咆哮",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"麻痺 30s - 2m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"パワーアタック",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"ライノアタック",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"ライノガード",
    charge:1,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"回避率アップ(回避+25%) 3m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"スポイル",
    charge:1,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"STRダウン(STR-42) 3m"
  });
  WSList.push({
    shuzoku:"甲虫",
    skill:"高周波フィールド",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"回避率ダウン(回避-40) 3m"
  });
  WSList.push({
    shuzoku:"コリブリ",
    skill:"ペッキングフラリー",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"リコイルダイブ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"威嚇",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ(スロウ+25%) 4m30s"
  });
  WSList.push({
    shuzoku:"ジャギル",
    skill:"ウォーターウォール",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"防御力アップ(防+100%) 2m - 5m"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ティックルテンドリル",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"",
    renkei2:"衝撃",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"スティンクボム",
    charge:2,
    shubetu:"魔法",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"暗闇、麻痺"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ネクターデルージュ",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"スナップウィード",
    skill:"ネペンシックプランジ",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"ドラウン、ヘヴィ"
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"シックルスラッシュ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"貫通",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"アシッドスプレー",
    charge:1,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"スパイダー",
    skill:"スパイダーウェブ",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ"
  });
  WSList.push({
    shuzoku:"スラッグ",
    skill:"ピュルラントウーズ",
    charge:2,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"最大HPダウン(最大HP-10%) 1m - 1m30s、バイオ(-15HP/3sec) 1m - 1m30s"
  });
  WSList.push({
    shuzoku:"スラッグ",
    skill:"コローシブウーズ",
    charge:3,
    shubetu:"魔法",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"攻撃力ダウン(攻-33%) 1m - 1m30s、防御力ダウン(防-33%) 1m - 1m30s"
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"ダブルクロー",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"溶解",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"グラップル",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"スピニングトップ",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"衝撃",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ダイアマイト",
    skill:"フィラメンテッドホールド",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    tuika:"スロウ(スロウ+50%) 2m"
  });
  WSList.push({
    shuzoku:"チャプリ",
    skill:"センシラブレード",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"チャプリ",
    skill:"テグミナバフェット",
    charge:2,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"湾曲",
    renkei2:"炸裂",
    tuika:"チョーク"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"モルトプルメイジ",
    charge:1,
    shubetu:"魔法",
    zokusei:"風",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"スワープフレンジー",
    charge:2,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"核熱",
    renkei2:"振動",
    tuika:"防御力ダウン、魔法防御力ダウン"
  });
  WSList.push({
    shuzoku:"トゥルフェイア",
    skill:"ペンタペック",
    charge:3,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"光",
    renkei2:"湾曲",
    tuika:"アムネジア"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"テイルブロー",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ブロックヘッド",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"振動",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ブレインクラッシュ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    tuika:"静寂 5s - 30s"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"ファイアボール",
    charge:1,
    shubetu:"魔法",
    zokusei:"火",
    renkei1:"",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"体液分泌",
    charge:1,
    shubetu:"教科",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"回避率アップ(回避+25%) 5m"
  });
  WSList.push({
    shuzoku:"トカゲ",
    skill:"超低周波",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    tuika:"回避率ダウン(回避-40) 3m"
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"サマーソルト",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"収縮",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"カースドスフィア",
    charge:1,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"フライ",
    skill:"毒液",
    charge:1,
    shubetu:"水",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"毒(-47HP/3sec) 4m30s"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"サペリフィック",
    charge:1,
    shubetu:"弱体",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"睡眠"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"パルジィパレン",
    charge:1,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"フライトラップ",
    skill:"グロオーサケス",
    charge:2,
    shubetu:"弱体",
    zokusei:"土",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"スロウ(スロウ+35%)"
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"ヘッドバット",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"炸裂",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"種まき",
    charge:1,
    shubetu:"物理",
    zokusei:"突",
    renkei1:"貫通",
    renkei2:"",
    tuika:"VITダウン"
  });
  WSList.push({
    shuzoku:"マンドラゴラ",
    skill:"リーフダガー",
    charge:1,
    shubetu:"物理",
    zokusei:"格",
    renkei1:"切断",
    renkei2:"",
    tuika:"毒"
  });
  WSList.push({
    shuzoku:"モスキート",
    skill:"インフェクティドサッカー",
    charge:1,
    shubetu:"魔法",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"悪疫"
  });
  WSList.push({
    shuzoku:"モスキート",
    skill:"グループスプレー",
    charge:2,
    shubetu:"魔法",
    zokusei:"闇",
    renkei1:"",
    renkei2:"",
    tuika:"ディスペル"
  });
  WSList.push({
    shuzoku:"ラズ",
    skill:"スイープガウジ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"",
    renkei2:"",
    tuika:"防御力ダウン"
  });
  WSList.push({
    shuzoku:"ラズ",
    skill:"ゼラススノート",
    charge:3,
    shubetu:"強化",
    zokusei:"",
    renkei1:"",
    renkei2:"",
    tuika:"ヘイスト、魔法防御力アップ、カウンター率アップ、ガード率アップ"
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"サイズテール",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"溶解",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"リッパーファング",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"硬化",
    renkei2:"",
    tuika:""
  });
  WSList.push({
    shuzoku:"ラプトル",
    skill:"噛みつきラッシュ",
    charge:3,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"闇",
    renkei2:"重力",
    tuika:"スロウ(スロウ+25) 2m - 5m"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"カオティックアイ",
    charge:1,
    shubetu:"弱体",
    zokusei:"風",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"静寂"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"ブラスター",
    charge:2,
    shubetu:"弱体",
    zokusei:"氷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:"麻痺"
  });
  WSList.push({
    shuzoku:"リンクス",
    skill:"チャージドホイスカー",
    charge:2,
    shubetu:"魔法",
    zokusei:"雷",
    renkei1:"",
    renkei2:"",
    flg:true,
    tuika:""
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"サドンランジ",
    charge:1,
    shubetu:"物理",
    zokusei:"打",
    renkei1:"衝撃",
    renkei2:"",
    tuika:"スタン"
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"スパイラルスピン",
    charge:1,
    shubetu:"物理",
    zokusei:"斬",
    renkei1:"切断",
    renkei2:"",
    tuika:"命中率ダウン(命中-20) 30s - 1m"
  });
  WSList.push({
    shuzoku:"レディバグ",
    skill:"ノイサムパウダー",
    charge:2,
    shubetu:"弱体",
    zokusei:"水",
    renkei1:"",
    renkei2:"",
    tuika:"攻撃力ダウン(攻-15%) 30s - 1m"
  });
  createTable();
}

function createTable(){
  var table = document.getElementById("WStable");
  for(var i = table.rows.length -1; i > 0; i--){
    table.deleteRow(-1);
  }
  var list = createArray();
  list.forEach(function(ws){
    var tr = table.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = ws.shuzoku;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.skill;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.charge;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.shubetu;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.zokusei;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.renkei1;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.renkei2;
    var td = tr.insertCell(-1);
    td.innerHTML = ws.tuika;
  });
}


function submitStop(e){
    if (!e) var e = window.event;
    if(e.keyCode == 13){
        createTable();
        return false;
    }
}

function createArray(){
  var newList = WSList;
  var shuzoku = document.search_form.shuzoku;
  var skill = document.search_form.skill;
  var shubetu = document.search_form.shubetu;
  var zokusei = document.search_form.zokusei;
  var renkei = document.search_form.renkei;
  var il = document.forms.search_form.IL;
  var search = new Array();
  search.push(shuzoku.options[shuzoku.selectedIndex].value);
  search.push(skill.value);
  search.push(shubetu.options[shubetu.selectedIndex].value);
  search.push(zokusei.options[zokusei.selectedIndex].value);
  search.push(renkei.options[renkei.selectedIndex].value);
  search.push(il.checked);
  for(var i = 0; i < 6; i++){
    newList = arrayFilter(newList, i, search[i]);
  }
  return newList;
}

function arrayFilter(list, type, keyword){
  var workList = new Array();
  if(keyword){
    workList = list.filter(function(object){
      var key = "";
      var key2 = "";
      switch(type){
        case 0:
          key = object.shuzoku;
          break;
        case 1:
          key = object.skill;
          break;
        case 2:
          key = object.shubetu;
          break;
        case 3:
          key = object.zokusei;
          break;
        case 4:
          key = object.renkei1;
          key2 = object.renkei2;
          break;
      }
      if(type == 5){
        if(!object.flg || (keyword =- false))return true;
      } else if(key.indexOf(keyword) >= 0 || key2.indexOf(keyword) >= 0){
        return true;
      }
    });
  } else {
    return list;
  }
  return workList;
}
