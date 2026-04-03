// 種目データベース
// name: 種目名（Claudeが生成するメニューと照合するために使用）
// videoUrl: 参考動画URL（後で特定動画に差し替え可能）
// kcalPer30mins: 30分あたりの目安消費カロリー (kcal)
// category: カテゴリ（下半身 / 上半身 / 体幹 / 有酸素）

const EXERCISES = [
  // --- 下半身 ---
  { name: "スクワット",           category: "下半身", kcalPer30mins: 120, videoUrl: "https://www.youtube.com/results?search_query=スクワット+正しいやり方" },
  { name: "ワイドスクワット",     category: "下半身", kcalPer30mins: 120, videoUrl: "https://www.youtube.com/results?search_query=ワイドスクワット+やり方" },
  { name: "ランジ",               category: "下半身", kcalPer30mins: 130, videoUrl: "https://www.youtube.com/results?search_query=ランジ+やり方+正しいフォーム" },
  { name: "ルーマニアンデッドリフト", category: "下半身", kcalPer30mins: 110, videoUrl: "https://www.youtube.com/results?search_query=ルーマニアンデッドリフト+やり方" },
  { name: "グルートブリッジ",     category: "下半身", kcalPer30mins: 80,  videoUrl: "https://www.youtube.com/results?search_query=グルートブリッジ+やり方" },
  { name: "ヒップアブダクション", category: "下半身", kcalPer30mins: 70,  videoUrl: "https://www.youtube.com/results?search_query=ヒップアブダクション+やり方" },
  { name: "カーフレイズ",         category: "下半身", kcalPer30mins: 60,  videoUrl: "https://www.youtube.com/results?search_query=カーフレイズ+やり方" },
  { name: "レッグプレス",         category: "下半身", kcalPer30mins: 100, videoUrl: "https://www.youtube.com/results?search_query=レッグプレス+やり方" },

  // --- 上半身 ---
  { name: "プッシュアップ",       category: "上半身", kcalPer30mins: 100, videoUrl: "https://www.youtube.com/results?search_query=プッシュアップ+正しいフォーム" },
  { name: "膝つきプッシュアップ", category: "上半身", kcalPer30mins: 70,  videoUrl: "https://www.youtube.com/results?search_query=膝つきプッシュアップ+やり方" },
  { name: "ダンベルローイング",   category: "上半身", kcalPer30mins: 90,  videoUrl: "https://www.youtube.com/results?search_query=ダンベルローイング+やり方" },
  { name: "ダンベルショルダープレス", category: "上半身", kcalPer30mins: 85, videoUrl: "https://www.youtube.com/results?search_query=ダンベルショルダープレス+やり方" },
  { name: "ラットプルダウン",     category: "上半身", kcalPer30mins: 95,  videoUrl: "https://www.youtube.com/results?search_query=ラットプルダウン+やり方" },
  { name: "チェストプレス",       category: "上半身", kcalPer30mins: 90,  videoUrl: "https://www.youtube.com/results?search_query=ダンベルチェストプレス+やり方" },
  { name: "アームカール",         category: "上半身", kcalPer30mins: 60,  videoUrl: "https://www.youtube.com/results?search_query=アームカール+やり方" },

  // --- 体幹 ---
  { name: "プランク",             category: "体幹", kcalPer30mins: 70,  videoUrl: "https://www.youtube.com/results?search_query=プランク+正しいやり方" },
  { name: "サイドプランク",       category: "体幹", kcalPer30mins: 65,  videoUrl: "https://www.youtube.com/results?search_query=サイドプランク+やり方" },
  { name: "クランチ",             category: "体幹", kcalPer30mins: 75,  videoUrl: "https://www.youtube.com/results?search_query=クランチ+正しいやり方" },
  { name: "バードドッグ",         category: "体幹", kcalPer30mins: 60,  videoUrl: "https://www.youtube.com/results?search_query=バードドッグ+やり方" },
  { name: "デッドバグ",           category: "体幹", kcalPer30mins: 60,  videoUrl: "https://www.youtube.com/results?search_query=デッドバグ+やり方" },
  { name: "レッグレイズ",         category: "体幹", kcalPer30mins: 80,  videoUrl: "https://www.youtube.com/results?search_query=レッグレイズ+やり方" },
  { name: "ドローイン",           category: "体幹", kcalPer30mins: 30,  videoUrl: "https://www.youtube.com/results?search_query=ドローイン+やり方+腹筋" },

  // --- 有酸素 ---
  { name: "ウォーキング",         category: "有酸素", kcalPer30mins: 90,  videoUrl: "https://www.youtube.com/results?search_query=ウォーキング+ダイエット+効果的" },
  { name: "ジョギング",           category: "有酸素", kcalPer30mins: 180, videoUrl: "https://www.youtube.com/results?search_query=ジョギング+初心者+やり方" },
  { name: "ステップ運動",         category: "有酸素", kcalPer30mins: 130, videoUrl: "https://www.youtube.com/results?search_query=ステップ運動+有酸素運動+自宅" },
  { name: "縄跳び",               category: "有酸素", kcalPer30mins: 200, videoUrl: "https://www.youtube.com/results?search_query=縄跳び+ダイエット+効果" },
  { name: "自転車（エアロバイク）", category: "有酸素", kcalPer30mins: 150, videoUrl: "https://www.youtube.com/results?search_query=エアロバイク+効果的な乗り方" },
];

// 種目名で検索するユーティリティ
function findExercise(name) {
  return EXERCISES.find(e => e.name === name || name.includes(e.name) || e.name.includes(name));
}
