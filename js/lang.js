$(function () {

    "use strict";

    var dictionary, set_lang;

    // Object literal behaving as multi-dictionary
    dictionary = {
        "english": {
            "PUNCH" : "PUNCH!",
            "INTRO": "Hello I'm",
            "NAME": "BHANS RIGUER",
            "COMPANY" : "SOFTWARE ENGINEER / LANEX",
            "ADDRESS" : "Sendai, Japan",
            "CONTACT_ME" : "Contact Me",
            "EMAIL" : "Email: bhans@po.lanex.co.jp",
            "SKYPE" : "Skype: lanex-bhans",
            "SUMMARY" : "Summary",
            "SUMMARY_DESC" : "Graduated from university with a Bachelor's degree in Information Technology.\n\n \
                \bHow to be a ROCKSTAR DEVELOPER?\b \n\n \
                Get yourself the best possible mentor who's willing to critique your code and teach you how he or she solves problems.  You'll know when you've achieved a decent level when you can legitimately challenge your mentor's opinions and win some arguments.\n \
                Always increase the difficulty and scope of the problems you are trying to solve. Most people don't have 20 years of experience, they have one year of experience repeated 20 times.  Don't be one of them.\n \
                Care about things like documentation, good method or function names, writing extensive tests.  Your code should look professional.\n \
                Scan all the standard libraries so you know what is there.  Then, when you are first using a particular library, learn it backwards and forwards.  If it's written in your language and the source code is available, look at that as well.\n \
                If you don't completely understand something, let that be a spur to go and learn about it. Always dive down deeply.\n \
                Use the best IDE possible for your language. Learn the IDE backwards and forwards.  A good IDE will speed you up tremendously.\n \
                When faced with a new challenge, i.e., say you've never used SOAP/XML before, do extensive research before you start coding.  Search around the internet and or your library to see if you can find the latest and greatest way people are solving that challenge.  Measure twice and cut once.\n \
                Remember that you're usually writing code for someone else's use.  Keep in constant contact with your client.  Manage their expectations, make sure they know that you are on top of everything, demonstrate expertise. Keep the social aspect in mind at all times.\n \
                Trust me, those tips can help ;) \n \
                --------------------------------------------------------------------------------",
            "SUMMARY_DESCS1" : "Developed Health Care Application for Android - Used SVN as version control during the development, roboguice framework that brings the simplicity and ease of Dependency Injection to Android, DAO Manager for SQLite, SOAP.",
            "SUMMARY_DESCS2" : "Java Desktop Application Developer - Developed mapping application, used SVN as a primary version control during the development, Google Maps API.",
            "SUMMARY_DESCS3" : "Android Developer - Developed News Application for Korea, E-Learning applications, ChatBot App.",
            "SUMMARY_DESCS4" : "Developed Social Media Application - Android, PHP, Zend, iOS",
            "SUMMARY_DESCS5" : "Android customization for POS (Custom hardware, software embedded OS)",
            "SUMMARY_DESCS6" : "Software Engineer - Telephony, Desktop, Mobile, Web applications",
            "PORTFOLIO" : "Portfolio",
            "PORTFOLIO_1" : "顧客管理システム(Customer Management System)(C#)",
            "PORTFOLIO_1_DESC" : "Desktop application CMS.",
            "PORTFOLIO_2" : "eHealth Mobile(Android)",
            "PORTFOLIO_2_DESC" : "Application for hospital staff and patients; Generate appointments, schedules and timetable.",
            "PORTFOLIO_3" : "SanMiguel Territories(J2SE)",
            "PORTFOLIO_3_DESC" : "Mapping application tool for describing business territories using GMaps.",
            "PORTFOLIO_4" : "Let's Learn English!(Android)",
            "PORTFOLIO_4_DESC" : "E-Learning Applications such as Translation, Vocabulary, Dictation, Recording, Interpretation, and Interview type video recording for English, Korean and Chinese languages.",
            "PORTFOLIO_5" : "Talky Bird(Android/PHP)",
            "PORTFOLIO_5_DESC" : "ChatBot App for Android and iOS that is using PHP, AIML, and JSON.",
            "PORTFOLIO_6" : "KoreaTimes(Android)",
            "PORTFOLIO_6_DESC" : "Mobile news application for South Korea.",
            "TIMELINE" : "TimeLine",
            "TIMELINE_1_CO" : "Lanex Corporation",
            "TIMELINE_1_POS" : "Software Engineer",
            "TIMELINE_1_YR" : "2014.10 - Present",
            "TIMELINE_2_CO" : "Global Fusion",
            "TIMELINE_2_POS" : "Android Developer",
            "TIMELINE_2_YR" : "2013.10 - 2014.10",
            "TIMELINE_3_CO" : "Yamba",
            "TIMELINE_3_POS" : "Android Developer",
            "TIMELINE_3_YR" : "2013.6 - 2014.7",
            "TIMELINE_4_CO" : "iRender Animations Inc.",
            "TIMELINE_4_POS" : "Android Developer",
            "TIMELINE_4_YR" : "2011.11 - 2013.3",
            "TIMELINE_5_CO" : "San Miguel Corporation",
            "TIMELINE_5_POS" : "Java Desktop Applications Developer",
            "TIMELINE_5_YR" : "2011.7 - 2011.12",
            "TIMELINE_6_CO" : "Exist",
            "TIMELINE_6_POS" : "Android Developer",
            "TIMELINE_6_YR" : "2010.2 - 2010.9",
            "SKILLSETS" : "SKILLSETS",
            "MOBILE" : "Mobile",
            "MOBILE_1" : "Android",
            "MOBILE_2" : "J2ME",
            "MOBILE_3" : "NDK",
            "MOBILE_4" : "iOS",
            "WEB" : "Web",
            "WEB_1" : "Web Services API（RESTfulな）",
            "WEB_2" : "J2EE",
            "WEB_3" : "HTML",
            "WEB_4" : "PHP",
            "WEB_5" : "CSS",
            "DESKTOP" : "Desktop",
            "DESKTOP_1" : "J2SE",
            "DESKTOP_2" : "C#",
            "DESKTOP_3" : "C++",
            "FRAMEWORKS" : "Frameworks",
            "FRAMEWORKS_1" : "RoboGuice",
            "FRAMEWORKS_2" : "ButterKnife",
            "FRAMEWORKS_3" : "Java/C# DAO",
            "FRAMEWORKS_4" : "Spring",
            "FRAMEWORKS_5" : "RoboElectric",
            "FRAMEWORKS_6" : "Selenium/Selendroid",
            "FRAMEWORKS_7" : "Titanium",
            "FRAMEWORKS_8" : "JSP/JSF",
            "FRAMEWORKS_9" : ".NET",
            "TELEPHONY" : "Telephony",
            "TELEPHONY_1" : "FreePBX",
            "TELEPHONY_2" : "VICIDIAL",
            "TELEPHONY_3" : "Asterisk",
            "VERSION_CONTROL" : "Version Control",
            "VERSION_CONTROL_1" : "GIT",
            "VERSION_CONTROL_2" : "SVN",
            "VERSION_CONTROL_3" : "Team Foundation Server",
            "SCRIPTING" : "Scripting",
            "SCRIPTING_1" : "VBScript",
            "SCRIPTING_2" : "bash/sh",
            "SCRIPTING_3" : "Python",
            "DATABASE" : "Database",
            "DATABASE_1" : "MySQL",
            "DATABASE_2" : "MSSQL",
            "DATABASE_3" : "SQLite3",
            "CONTINUOUS_INTEGRATION" : "Continuous Integration",
            "CONTINUOUS_INTEGRATION_1" : "Jenkins",
            "PROJECT_MANAGEMENT" : "Project Management",
            "PROJECT_MANAGEMENT_1" : "REDMINE",
            "PROJECT_MANAGEMENT_2" : "JIRA",
            "BUG_TRACKER" : "Bug Tracker",
            "BUG_TRACKER_1" : "Mantis",
            "BUG_TRACKER_2" : "Taiga",
            "AIML" : "AIML",
            "AIML_1" : "A.L.I.C.E.",
            "DESIGN_TOOLS" : "Design Tools",
            "DESIGN_TOOLS_1" : "Adobe Photoshop",
        },
        "日本語": {
            "PUNCH" : "ようこそ!",
            "INTRO": "こんにちは 私は",
            "NAME": "リガー・バンスです。",
            "COMPANY" : "ソフトウェアエンジニア / ラネックス法人",
            "ADDRESS" : "日本、仙台",
            "CONTACT_ME" : "私に連絡",
            "EMAIL" : "メール: bhans@po.lanex.co.jp",
            "SKYPE" : "スカイプ: lanex-bhans",
            "SUMMARY": "概要",
            "SUMMARY_DESC" : "情報工学専門して大学を卒業した。\n\n \
                \bどうやってロックスター開発者になられるのですか？\b\n\n \
                自分の書いたコードを批評できる、またはあった問題を解決できる方法を教えられる できるだけ最もいい師を見つけて。その師の意見に正論で挑戦して、議論に勝つようになってきた時かなりいい水準を果たしたことを分かれます。\n \
                解決している問題の難しさや範囲をいつも上がりなさい。多くの人は２０年間の経験を持っていません。ただ１年間の経験を２０度も重ねているたけです。その人のようにならないでください。\n \
                文書化や良い方法、関数の名、全面的なソフトウェアテストをかくなどのことを大切にしなさい。書いたコードはプロフェッショナルに見えるべきです。\n \
                構成要素を分かるため、すべての標準ライブラリをスキャンしなさい。特定のライブラリを初めて使うとき、そのライブラリを後ろや前の両方から覚えなさい。知っている言語で書かれたのか、またはソースコードは利用可能であるのかと確認してください。何か完全に分からないことがあれば、それを新しいことを学ぶチャンスにして、いつも博識を求めなさい。\n \
                できるだけ一番良いの統合開発環境（IDE）を使いなさい。統合開発環境（IDE）を後ろや前の両方から覚えなさい。良い統合開発環境（IDE）はあなたの速度をすごく上げてくれます。\n \
                難しい仕事を挑む時、例えば前に使ったことはないSOAP/XMLで仕事をするべきの時、コードを書き始める前に広範囲なリサーチすればいい。インターネットや自分のライブラリで検索してみて：他の人が使われている最新と最高な解決方法は何だろうか。よく考えて進みなさい。\n \
                忘れないでください：あなたは他の人のためコードを書きます。いつも得意先に連絡を取りなさい。彼らの 期待に添って、専門知識を発揮しなさい。社会相をいつも覚えておいてください。\n \
                話したことを信じてください、これらのヒントは助けてあげます。;)\n \
                --------------------------------------------------------------------------------",
            "SUMMARY_DESCS1" : "アンドロイドのため健康管理のアプリケーションを開発した、開発する際にはバージョン管理システムとしてアパッチ・サブバージョン（SVN）を、依存性の注入の単純性をアンドロイドにを達するRoboGuiceのフレームワークを使った、エスキューライト（SQLite）にDAO マネージャーとSOAP。",
            "SUMMARY_DESCS2" : "Java デスクトップ・アプリケーションの開発 − マッピング・アプリケーション開発した、開発する際にはバージョン管理システムとしてアパッチ・サブバージョン（SVN）を使った、グーグル マップ、アプリケーションプログラミングインタフェース（API）",
            "SUMMARY_DESCS3" : "アンドロイドの開発、韓国のためのニュース・アプリケーションを開発した、Eラーニング・アプリケーション、人工無脳・アプリケーション。",
            "SUMMARY_DESCS4" : "ソーシャルメディア・アプリケーションの開発、ピー・エイチ・ピー、ゼンド、アイオーエス。",
            "SUMMARY_DESCS5" : "販売時点情報管理（ POS ）のようアンドロイドのカスタマイズ （カスタムハードウェア、ソフトウェア組み込みオペレーティングシステム）",
            "SUMMARY_DESCS6" : "ソフトウェア技術者 − 電話、デスクトップ、モビール、ウェブアプリケーション。",
            "PORTFOLIO" : "ポートフォリオ",
            "PORTFOLIO_1" : "顧客管理システム(Customer Management System)",
            "PORTFOLIO_1_DESC" : "デスクトップアプリケーション、コンテンツマネージメントシステム（CMS）",
            "PORTFOLIO_2" : "eHealth Mobile (イヘルツ・モービル)",
            "PORTFOLIO_2_DESC" : "医療スタッフと患者のためのアプリケーション、医者の予約や予定表、時間割りを生成する。",
            "PORTFOLIO_3" : "SanMiguel Territories（サンミゲルテリトリーズ）",
            "PORTFOLIO_3_DESC" : "グーグルマップを使ってビジネスの領地を表すマッピングアプリケーションツール",
            "PORTFOLIO_4" : "Let's Learn English! （レッツレーヌイギリス）",
            "PORTFOLIO_4_DESC" : "英語、韓国語、中国語で翻訳、語彙、ディクテーション、録音、通訳、インタビュータイプのビデオ録画ができるE・ラーニング・アプリケーション。",
            "PORTFOLIO_5" : "Talky Bird （トリキーバーディ）",
            "PORTFOLIO_5_DESC" : "アンドロイドとアイオーエスのためピー・エイチ・ピー （PHP）、エーアイエムエル（AIML）、ジェイソン（JSON）を使う人工無脳・アプリケーション。",
            "PORTFOLIO_6" : "KoreaTimes（コリアタイムズ）",
            "PORTFOLIO_6_DESC" : "韓国のためのモビールニュース・アプリケーション",
            "TIMELINE" : "タイムライン",
            "TIMELINE_1_CO" : "株式会社ラネックス",
            "TIMELINE_1_POS" : "ソフトウェアエンジニア",
            "TIMELINE_1_YR" : "2014.10 - 現在",
            "TIMELINE_2_CO" : "グローバル・フュージョン",
            "TIMELINE_2_POS" : "アンドロイド開発者",
            "TIMELINE_2_YR" : "2013.10 - 2014.10",
            "TIMELINE_3_CO" : "ヤンバ",
            "TIMELINE_3_POS" : "アンドロイド開発者",
            "TIMELINE_3_YR" : "2013.6 - 2014.7",
            "TIMELINE_4_CO" : "アイレンズるアニメーション株式会社",
            "TIMELINE_4_POS" : "アンドロイド開発者",
            "TIMELINE_4_YR" : "2011.11 - 2013.3",
            "TIMELINE_5_CO" : "サンミグエル株式会社",
            "TIMELINE_5_POS" : "Javaのデスクトップアプリケーション開発者",
            "TIMELINE_5_YR" : "2011.7 - 2011.12",
            "TIMELINE_6_CO" : "エグズィスト",
            "TIMELINE_6_POS" : "アンドロイド開発者",
            "TIMELINE_6_YR" : "2010.2 - 2010.9",
            "SKILLSETS" : "スキルセット",
            "MOBILE" : "モビール",
            "MOBILE_1" : "アンドロイド",
            "MOBILE_2" : "J2ME",
            "MOBILE_3" : "NDK",
            "MOBILE_4" : "iOS",
            "WEB" : "ウェブ",
            "WEB_1" : "WebサービスAPI（RESTfulな）",
            "WEB_2" : "J2EE",
            "WEB_3" : "HTML",
            "WEB_4" : "PHP",
            "WEB_5" : "CSS",
            "DESKTOP" : "デスクトップ",
            "DESKTOP_1" : "J2SE",
            "DESKTOP_2" : "C#",
            "DESKTOP_3" : "C++",
            "FRAMEWORKS" : "フレームワークス",
            "FRAMEWORKS_1" : "RoboGuice",
            "FRAMEWORKS_2" : "ButterKnife",
            "FRAMEWORKS_3" : "Java/C# DAO",
            "FRAMEWORKS_4" : "Spring",
            "FRAMEWORKS_5" : "RoboElectric",
            "FRAMEWORKS_6" : "Selenium/Selendroid",
            "FRAMEWORKS_7" : "Titanium",
            "FRAMEWORKS_8" : "JSP/JSF",
            "FRAMEWORKS_9" : ".NET",
            "TELEPHONY" : "電話",
            "TELEPHONY_1" : "FreePBX",
            "TELEPHONY_2" : "VICIDIAL",
            "TELEPHONY_3" : "Asterisk",
            "VERSION_CONTROL" : "バージョン管理システム",
            "VERSION_CONTROL_1" : "GIT",
            "VERSION_CONTROL_2" : "SVN",
            "VERSION_CONTROL_3" : "Team Foundation Server",
            "SCRIPTING" : "スクリプト",
            "SCRIPTING_1" : "VBScript",
            "SCRIPTING_2" : "bash/sh",
            "SCRIPTING_3" : "Python",
            "DATABASE" : "データベース",
            "DATABASE_1" : "MySQL",
            "DATABASE_2" : "MSSQL",
            "DATABASE_3" : "SQLite3",
            "CONTINUOUS_INTEGRATION" : "継続的インテグレーション",
            "CONTINUOUS_INTEGRATION_1" : "Jenkins",
            "PROJECT_MANAGEMENT" : "プロジェクトマネジメント",
            "PROJECT_MANAGEMENT_1" : "REDMINE",
            "PROJECT_MANAGEMENT_2" : "JIRA",
            "BUG_TRACKER" : "バグ管理",
            "BUG_TRACKER_1" : "Mantis",
            "BUG_TRACKER_2" : "Taiga",
            "AIML" : "エーアイエムエル",
            "AIML_1" : "A.L.I.C.E.",
            "DESIGN_TOOLS" : "設計ツール",
            "DESIGN_TOOLS_1" : "Adobe Photoshop",
        }
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $("#lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    var userLang = (navigator.language) ?     
    navigator.language : navigator.userLanguage;
    var sel = document.getElementById('lang');
    if(userLang.includes("ja")){
        set_lang(dictionary.日本語);
        sel.selectedIndex = 1;
    } else {
        set_lang(dictionary.english);
        sel.selectedIndex = 0;
    }
    

});