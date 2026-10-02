const QUESTION_SETS = [
  {
    id: "19-all",
    label: "第19回 ①＋③",
    title: "基本動詞の熟語",
    range: "UPGRADE pp.330-347",
    sourceNote: "Googleフォームのクラス・出席番号・名前入力欄を除いた40問",
    questions: [
      // 第19回 ①
      { id: 1, sourceSet: "①", sourceNo: 4, text: "どんなことがあっても，約束を守らなければならない。\nWhatever may happen, you must （　） your promise.", choices: ["give", "keep", "defend", "hold"], answer: 1 },
      { id: 2, sourceSet: "①", sourceNo: 5, text: "I advised him that he should keep his thoughts to himself in this situation. But he couldn't （　） his tongue.", choices: ["cease", "hold", "lose", "hide"], answer: 1 },
      { id: 3, sourceSet: "①", sourceNo: 6, text: "A：Don't tell Allan about John and Mary. You know he can't （　） a secret.\nB：OK. I got it.", choices: ["hold", "stop", "save", "keep"], answer: 3 },
      { id: 4, sourceSet: "①", sourceNo: 7, text: "You had better keep early （　） so you will be in good health.", choices: ["conditions", "customs", "hours", "time"], answer: 2 },
      { id: 5, sourceSet: "①", sourceNo: 8, text: "A：I've got to go. Thank you for everything.\nB：I'll miss you but let's （　）.", choices: ["go out together", "get along with you", "not be sorry", "keep in touch"], answer: 3 },
      { id: 6, sourceSet: "①", sourceNo: 9, text: "Keep your children （　） movies too often.", choices: ["of going on", "from going to", "by going for", "away from"], answer: 1 },
      { id: 7, sourceSet: "①", sourceNo: 10, text: "If you get too excited in an argument, you tend to （　） the main point.", choices: ["keep up with", "lose sight of", "pay attention to", "think much of"], answer: 1 },
      { id: 8, sourceSet: "①", sourceNo: 11, text: "\"（　）! There's a car coming,\" the mother shouted to her young daughter.", choices: ["Danger", "Watch out", "Caution", "Attention"], answer: 1 },
      { id: 9, sourceSet: "①", sourceNo: 12, text: "If you have any questions, please （　） to ask me any time.", choices: ["be easy", "be safe", "feel easy", "feel free"], answer: 3 },
      { id: 10, sourceSet: "①", sourceNo: 13, text: "I haven't （　） my girlfriend for more than three months.", choices: ["heard from", "listened from", "written from", "received from", "talked from"], answer: 0 },
      { id: 11, sourceSet: "①", sourceNo: 14, text: "We （　） our restaurant ten years ago in Paris.", choices: ["made starting", "started out", "set up", "set for"], answer: 2 },
      { id: 12, sourceSet: "①", sourceNo: 15, text: "It'll （　） you no harm to drink a little whisky.", choices: ["come", "do", "have", "take"], answer: 1 },
      { id: 13, sourceSet: "①", sourceNo: 16, text: "My birthday is a month from today, that's to （　）, April 5th.", choices: ["say", "speak", "talk", "tell"], answer: 0 },
      { id: 14, sourceSet: "①", sourceNo: 17, text: "Don't speak ill （　） others behind their backs.", choices: ["of", "off", "on", "only", "out"], answer: 0 },
      { id: 15, sourceSet: "①", sourceNo: 18, text: "As we have seen, the basis of this conclusion is, to say the （　）, vague.", choices: ["honest", "least", "more", "opinion"], answer: 1 },
      { id: 16, sourceSet: "①", sourceNo: 19, text: "Fortunately, she （　） the bankrupt company.", choices: ["had been hired by", "had nothing to do with", "shared nothing to", "worked desperately for"], answer: 1 },
      { id: 17, sourceSet: "①", sourceNo: 20, text: "Two students （　） asleep during the class.", choices: ["began", "fell", "jumped", "led"], answer: 1 },
      { id: 18, sourceSet: "①", sourceNo: 21, text: "The editor hit （　） a good title for a new novel by a famous writer.", choices: ["at", "over", "upon", "with"], answer: 2 },
      { id: 19, sourceSet: "①", sourceNo: 22, text: "Allen plays the piano beautifully, but I don't like the way he always （　） in front of everyone.", choices: ["comes over", "makes out", "shows off", "turns around"], answer: 2 },
      { id: 20, sourceSet: "①", sourceNo: 23, text: "The clerk （　） me a call to let me know about you.", choices: ["hit", "took", "gave", "sent"], answer: 2 },

      // 第19回 ③
      { id: 21, sourceSet: "③", sourceNo: 4, text: "どんなことがあっても，約束を守らなければならない。\nWhatever may happen, you must （　） your promise.", choices: ["give", "keep", "defend", "hold"], answer: 1 },
      { id: 22, sourceSet: "③", sourceNo: 5, text: "I advised him that he should keep his thoughts to himself in this situation. But he couldn't （　） his tongue.", choices: ["cease", "hold", "lose", "hide"], answer: 1 },
      { id: 23, sourceSet: "③", sourceNo: 6, text: "A：Don't tell Allan about John and Mary. You know he can't （　） a secret.\nB：OK. I got it.", choices: ["hold", "stop", "save", "keep"], answer: 3 },
      { id: 24, sourceSet: "③", sourceNo: 7, text: "You had better keep early （　） so you will be in good health.", choices: ["conditions", "customs", "hours", "time"], answer: 2 },
      { id: 25, sourceSet: "③", sourceNo: 8, text: "A：I've got to go. Thank you for everything.\nB：I'll miss you but let's （　）.", choices: ["go out together", "get along with you", "not be sorry", "keep in touch"], answer: 3 },
      { id: 26, sourceSet: "③", sourceNo: 9, text: "When I drive, I （　） only safety in mind.", choices: ["am", "hold", "keep", "support"], answer: 2 },
      { id: 27, sourceSet: "③", sourceNo: 10, text: "It is very expensive to keep （　） with the fashion.", choices: ["to", "at", "up", "by"], answer: 2 },
      { id: 28, sourceSet: "③", sourceNo: 11, text: "Matty, my colleague, is very shy. She can't look （　）.", choices: ["me my eye", "at me in my eyes", "at me in eyes", "me in the eye"], answer: 3 },
      { id: 29, sourceSet: "③", sourceNo: 12, text: "There was nobody in the village. We （　） the whole area for hours, but could find no trace of residents.", choices: ["looked for", "searched", "sought", "saw", "witnessed"], answer: 1 },
      { id: 30, sourceSet: "③", sourceNo: 13, text: "Will you （　） after my cats while I'm away from home?", choices: ["keep", "look", "put", "catch"], answer: 1 },
      { id: 31, sourceSet: "③", sourceNo: 14, text: "\"（　）! There's a car coming,\" the mother shouted to her young daughter.", choices: ["Danger", "Watch out", "Caution", "Attention"], answer: 1 },
      { id: 32, sourceSet: "③", sourceNo: 15, text: "If you have any questions, please （　） to ask me any time.", choices: ["be easy", "be safe", "feel easy", "feel free"], answer: 3 },
      { id: 33, sourceSet: "③", sourceNo: 16, text: "We all went to the airport to see Mr. Adams （　）.", choices: ["at", "out", "off", "up"], answer: 2 },
      { id: 34, sourceSet: "③", sourceNo: 17, text: "We （　） our restaurant ten years ago in Paris.", choices: ["made starting", "started out", "set up", "set for"], answer: 2 },
      { id: 35, sourceSet: "③", sourceNo: 18, text: "Don't speak ill （　） others behind their backs.", choices: ["of", "off", "on", "only", "out"], answer: 0 },
      { id: 36, sourceSet: "③", sourceNo: 19, text: "We couldn't tell one （　） the other.", choices: ["with", "to", "against", "from"], answer: 3 },
      { id: 37, sourceSet: "③", sourceNo: 20, text: "Two students （　） asleep during the class.", choices: ["began", "fell", "jumped", "led"], answer: 1 },
      { id: 38, sourceSet: "③", sourceNo: 21, text: "The first of May （　） on a Sunday this year.", choices: ["fell", "happened", "hit", "jumped", "stopped"], answer: 0 },
      { id: 39, sourceSet: "③", sourceNo: 22, text: "I'll pick you （　） at Sendai Station at five.", choices: ["on", "out", "up", "off"], answer: 2 },
      { id: 40, sourceSet: "③", sourceNo: 23, text: "Allen plays the piano beautifully, but I don't like the way he always （　） in front of everyone.", choices: ["comes over", "makes out", "shows off", "turns around"], answer: 2 }
    ]
  }
];
