import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import BackgroundMovie from "./BackgroundMovie";
import Work from "./Work";
import Achievement from "./Achievement";
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import Skill from "./Skill";

const Home = () => {
  const topBackground: React.CSSProperties = {
    background: 'rgb(255,255,255)',
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
    opacity: "0.95",
    boxShadow: "10px 10px 5px 5px rgba(0,0,0,0.95)",
  };

  const profileBackground: React.CSSProperties = {
    backgroundImage: 'url("./bg-profile3.webp")',
    backgroundRepeat: "repeat",
    backgroundPosition: 'center',
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <div>
        <Helmet>
          <meta property="og:title" content="andooo's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://andooo.dev" />
          <meta property="og:image" content="https://raw.githubusercontent.com/andotnct/andotnct.github.io/master/public/worksImg/homepage.png" />
          <meta property="og:site_name" content="Andooo's Portfolio" />
          <meta property="og:description" content="あんどーのホームページ" />
          <meta name="twitter:title" content="andooo's Portfolio" />
          <meta name="twitter:description" content="あんどーのホームページ" />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/andotnct/andotnct.github.io/master/public/worksImg/homepage.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div className="App None h-screen" id="top">
          <BackgroundMovie />
          <Header />
            <div className="h-screen flex items-center justify-center">
                <div className="h-1/5 md:h-5/6 w-5/6 relative" style={topBackground}>
                  <div className="font-bold text-5xl md:text-8xl absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none text-black">
                    Andooo's Portfolio
                  </div>
                </div>
            </div>
            <div className="h-screen relative bg-black text-white bg-opacity-80" id="profile">
              <div className="flex-col flex justify-center items-center h-full">
                  <div className="flex items-center justify-center my-8">
                    <div className="md:flex">
                      <img src="./icon.jpg" className="w-40 block m-auto"></img>
                      <div className="mx-8 text-left my-4 md:my-0">
                        <div className="text-4xl font-bold">
                          あんどー
                        </div>
                        東京都出身<br />
                        東京工業高等専門学校 情報工学科 卒業<br />
                        東京大学工学部 システム創成学科 在籍<br />
                        <div>
                          ■GitHub
                          <a href="https://github.com/andotnct" target="_blank">
                            <p className="text-blue-500 hover:underline pl-2" style={{ display: 'inline' }}>https://github.com/andotnct</p>
                          </a>
                        </div>
                        <div>
                          ■Mail
                          <a href="mailto:ando.hikaru@andooo.dev">
                            <p className="text-blue-500 hover:underline pl-2" style={{ display: 'inline' }}>ando.hikaru@andooo.dev</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          <div className="md:h-screen relative" id="works" style={{ minHeight: '840px'}}>
            <div className="flex justify-center flex-col items-center">
              <div className="shadow-xl bg-black bg-opacity-70 mt-20 text-white font-bold text-3xl md:text-5xl md:text-5xl px-8 md:px-20 py-1 rounded-full">
                WORKS
              </div>
              <div className="flex-col">
                <div className="my-8 md:flex justify-center">
                    <Work title="Andooo's Portfolio" explanation="このホームページです。フロントの技術を身につけたいと思い作り始め、背景の動画はAviUtlで作っています。スマホで見た時にも違和感のないデザインとなるようレスポンシブ対応させるのに苦労しました。" useTech="Node.js, TypeScript, React, Tailwind CSS" link="https://andooo.dev" linktext="https://andooo.dev" codelink="https://github.com/andotnct/andotnct.github.io" img="./worksImg/homepage.png"/>
                    <Work title="タイピングゲーム（仮" explanation="ユーザーのタイピング記録からゴーストを生成し、擬似的にタイピング対決ができるゲームを開発中です。進捗があり次第アップデートしていきます。" useTech="Unity, C#" link="/andotyping" linktext="https://www.andooo.dev/andotyping" codelink="https://github.com/andotnct/andotyping" img="./worksImg/typing.jpg"/>
                    <Work title="千手観音キャンバス" explanation="いくつもの線が同時に描画される不思議なペイントツールをElmで開発しました。Elmは関数型言語の一種ですが、最初は高専時代の友人に関数型言語を強く推されDiscordでHaskellの講義をしてもらったのが始まりです。 if文もfor文もない言語に戸惑いつつも、手続き型言語とは違った脳の使い方をすることで楽しさを見出しプログラミングへの視野を広げることもできました。" useTech="Elm" link="https://elmcanvas.andooo.dev/" linktext="https://elmcanvas.andooo.dev/" codelink="https://github.com/andotnct/ElmCanvas" img="./worksImg/ElmCanvas.jpg"/>    
                </div>
                <div className="my-8 md:flex justify-center">
                  <Work title="AirArt" explanation="3D空間を自由に動き回り、空中にお絵かきができるペイントツール「AirArt」を開発しました。大学のJavaの授業の自由制作課題用に開発しましたが、「言語は何でも良い」と言われたのでElmで開発しました。elm-3d-sceneを活用して3Dのエンティティモデルを作成し、一部の機能で乱数を使用することでElmが副作用をどのように扱っているかを学ぶことができました。追加したい機能が大量にあるので気が向いたらアップデートしていきます。" useTech="Elm, JavaScript(一部機能)" link="https://airart.andooo.dev/" linktext="https://airart.andooo.dev/" codelink="https://github.com/andotnct/AirArt" img="./worksImg/AirArt.jpg"/>
                  <Work title="Vegeoku紹介動画" explanation="第33回高専プロコンに出場した際に制作した作品紹介動画です。中学の頃は無限に動画編集に時間を捧げていましたがこんなところで役立てて良かったです。強力すぎるメンバーのおかげで、本戦では特別賞と企業賞をいただくことができました。" useTech="AviUtl" link="https://www.youtube.com/watch?v=fOkGEEy6dAE" linktext="https://www.youtube.com/watch?v=fOkGEEy6dAE" codelink={null} img="./worksImg/vegeoku.jpg"/>  
                  <Work title="AquaMind" explanation="東京大学×SoftBank『UGIP Data Hackathon 2024』に向けて開発したものです。ブルーカーボンをテーマにし、石垣島周辺の衛星画像と底生分類のデータセットから海草の分布を予測するAIモデルを作成し、宮古島で予測した結果をWebサイト上で可視化しました。自分はデータセット作成とフロントエンドを担当し、協力なメンバーのおかげで優勝することができました。" useTech="AviUtl" link="https://aqua-mind.net/" linktext="https://aqua-mind.net/" codelink={null} img="./worksImg/AquaMind.jpg"/>  
                </div>
              </div>
            </div>
          </div>
          <div className="relative" id="achievement" style={{minHeight: '588px'}}>
            <div className="flex justify-center flex-col items-center">
              <div className="shadow-xl bg-black bg-opacity-70 mt-20 text-white font-bold text-3xl md:text-5xl md:text-5xl px-8 md:px-20 py-1 rounded-full">
                ACHIEVEMENT
              </div>
              <div className="flex-col">
                <div className="my-8 md:flex">
                  <Achievement title="AtCoder" explanation="競技プログラミングのAtCoderです。すぐに水色ぐらいまでいく方もいるようですが自分はそのタイプではなかったのでコツコツ頑張ります。モチベに波がありますが、いつかガッツリ精進したいと考えています。" link="https://atcoder.jp/users/and0oo?lang=ja" img="./achievementImg/AtCoder.jpg"/>
                  <Achievement title="Kaggle" explanation="AIの精度で競い合う競技AI?のKaggleです。コンペに参加したことはありますが何も実績を残せていないのでいつかメダルを取りたいです。" link="https://www.kaggle.com/and0oo" img="./achievementImg/Kaggle.jpg"/>
                  <Achievement title="タイピング" explanation="小3ぐらいのときに「今後ずっとPCを使い続けるとしたら絶対タイピングが速い方が良い」と思い、残りの小学校生活を全てタイピング練習に捧げました(?)。普段は平均して10打/秒ほどですが調子が良ければ16打/秒ぐらいです。" link="https://sushida.net/" img="./achievementImg/typing.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-screen relative bg-black text-white bg-opacity-80" id="skill" style={{ minHeight: '730px' }}>
            <div className="flex justify-center flex-col items-center">
              <div className="text-5xl font-bold mt-20">
                SKILL
              </div>
              <div className="hidden md:block">
                <div className="text-xl mt-2">
                  よく使うものから触ったことある程度のものまであります
                </div>
              </div>
              <div className="md:hidden">
                <div className="text-xl mt-2">
                  <div>
                    よく使うものから触ったことある
                  </div>
                  <div>
                    程度のものまであります
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <div className="md:flex md:justify-center md:items-center md:my-2">
                  <div className="flex">
                    <Skill language="HTML" img="languageLogo/HTML.jpg"/>
                    <Skill language="CSS" img="languageLogo/CSS.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="Sass" img="languageLogo/Sass.jpg"/>
                    <Skill language="JavaScript" img="languageLogo/JavaScript.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="TypeScript" img="languageLogo/TypeScript.jpg"/>
                    <Skill language="Elm" img="languageLogo/Elm.jpg"/>
                  </div>
                </div>
                <div className="md:flex md:justify-center md:items-center md:my-2">
                  <div className="flex">
                    <Skill language="Python" img="languageLogo/Python.jpg"/>
                    <Skill language="Java" img="languageLogo/Java.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="C" img="languageLogo/C.jpg"/>
                    <Skill language="C++" img="languageLogo/CPlusPlus.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="C#" img="languageLogo/CSharp.jpg"/>
                    <Skill language="Haskell" img="languageLogo/Haskell.jpg"/>
                  </div>
                </div>
                <div className="md:flex md:justify-center md:items-center my-2">
                  <div className="flex">
                    <Skill language="Next.js" img="languageLogo/Nextjs.jpg"/>
                    <Skill language="Node.js" img="languageLogo/Nodejs.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="django" img="languageLogo/django.jpg"/>
                    <Skill language="React" img="languageLogo/React.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="Tailwind" img="languageLogo/Tailwind.jpg"/>
                  </div>
                </div>
                <div className="md:flex md:justify-center md:items-center my-2">
                  <div className="flex">
                    <Skill language="GitHub" img="languageLogo/GitHub.jpg"/>
                    <Skill language="AWS" img="languageLogo/AWS.jpg"/>
                  </div>
                  <div className="flex">
                    <Skill language="Docker" img="languageLogo/Docker.jpg"/>
                    <Skill language="Firebase" img="languageLogo/Firebase.jpg"/>                    
                  </div>
                  <div className="flex">
                    <Skill language="Unity" img="languageLogo/Unity.jpg"/>
                    <Skill language="AviUtl" img="languageLogo/AviUtl.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
  
export default Home;