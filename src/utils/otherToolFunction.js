 //BBcode轉換編碼
 export function bbcodeToHtml(bbcode) {
    var BBCodeRegExMap = {
      tagClass: {
        "(\\[[^\\]]+?)(\\§\\s*)(.+?)([\\§\\|\\#].+?)?(\\])": "$1 class='$3'$4$5",
      },
      tagId: {
        "(\\[[^\\]]+?)(\\#\\s*)(.+?)([\\§\\|\\#].+?)?(\\])": "$1 id='$3'$4$5",
      },
      tagImgAlt: {
        "(\\[img.+?)(\\|)(\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])": "$1$3 alt='$4'$5$6$7$8",
      },
      tagATitle: {
        "(\\[a.+?)(\\|)(\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])": "$1$3 title='$4'$5$6$7$8$4</a>",
      },
      tagImgSrc: {
        "(\\[img\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])": "$1src='$2'$3$4$5$6",
      },
      // tagAHref: {
      //   "(\\[a\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])":
      //     "$1href='$2' target='_blank'$3$4$5$6",
      // },
      tagUl: {
        "(\\[\\*\\])(.*)(\\[\\/\\*\\])": "<ul><li>$2</li></ul>",
      },
      tagLi: {
        "(\\[\\/\\*\\])(\\s*)(\\[\\*\\])": "</li><li>",
      },
      tagFieldsetLegend: {
        "(\\[g\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])(.+?)(\\[\\/g\\])": "<fieldset$4$5><legend class='sans-serif-400-italic'>$2</legend>$7</fieldset>",
      },
      tagSmall: {
        "(\\[)(s)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(s)(\\])": "<small $4>$6</small>",
      },
      tagEm: {
        "(\\[)(i)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(i)(\\])": "<em $4>$6</em>",
      },
      tagDiv: {
        "(\\[)(section)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(section)(\\])": "<div $4>$6</div>",
      },
      tagQuote: {
        "(\\[)(q)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(q)(\\])": "<p class='quote'$4><span class='serif-900'>“</span> $6</p>",
      },
      tagQuoteSource: {
        "(\\[qs\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])(.+?)(\\[)(\\/)(qs)(\\])": "<br><a href='$2' class='quote-source'$5>$7</a>",
      },
      tagLanguage: {
        "(\\[)(lang)(\\s*.*?)(\\])(.+?)(\\[)(\\/)(lang)(\\])": "<p class='sans-serif-600'>$5</p>",
      },
      tagYear: {
        "(\\[)(y)(\\s*.*?)(\\])(.+?)(\\[)(\\/)(y)(\\])": "<div class='lang-$5-years' id='skills-bar'><p class='sans-serif-600'>$5</p></div>",
      },
      tagAngleBrackets: {
        "\\[(\\/?)(.+?)[\\]]\\]?": "<$1$2>",
      },
      tagImage: {
        "\\[img\\](.*?)\\[\\/img\\]": "<img src='$1' alt='Image' />",
      },
      tagVideo: {
        "\\[video\\](.*?)\\[\\/video\\]": "<iframe width='560' height='315' src='$1' frameborder='0' allowfullscreen></iframe>",
      },
      tagAHref: {
        "\\[a\\](.*?)\\[\\/a\\]": "<a href='$1' target='_blank'>$1</a>",
      },
      tagAttach: {
        "\\[attach\\](.*?)\\[\\/attach\\]": "<a href='$1' target='_blank'>$1</a>",
      },
      tagUrl: {
        "\\[url\\](.*?)\\[\\/url\\]": "<a href='$1'>$1</a>",
      },
    };

    for (var i in BBCodeRegExMap) {
      var BBCodeKey = Object.keys(BBCodeRegExMap[i])[0];
      var BBCodeVal = BBCodeRegExMap[i][BBCodeKey];
      bbcode.match(BBCodeKey) ?
        (bbcode = bbcode.replace(new RegExp(BBCodeKey, "g"), BBCodeVal)) :
        bbcode;
    }

    return bbcode;
  }


  //時間轉換
  export function changeTime(time) {
    // 將時間戳轉換為 JavaScript 的日期對象
    var date = new Date(time * 1000); // 乘以1000轉換為毫秒
    // 提取日期和時間的各個部分
    var year = date.getFullYear(); // 年份
    var month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份（注意加1，並用padStart填充零位數）
    var day = date.getDate().toString().padStart(2, "0"); // 日（填充零位數）
    var hours = date.getHours().toString().padStart(2, "0"); // 時（填充零位數）
    var minutes = date.getMinutes().toString().padStart(2, "0"); // 分（填充零位數）
    // 格式化為指定的字符串格式
    var formattedDate =
      year + "/" + month + "/" + day + "/" + hours + ":" + minutes;
    return formattedDate;
  }


