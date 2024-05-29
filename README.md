# Resume

This project generates a resume using React and @react-pdf/renderer.

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## Usage

This project defines a resume using React components and generates a PDF document. Below is the core code for generating the resume.

```jsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
const NotoSansJPRegular = require("./fonts/NotoSansJPRegular.ttf");
const NotoSansJPBold = require("./fonts/NotoSansJPBold.ttf");

Font.register({
  family: "NotoSansJP",
  fonts: [
    { src: NotoSansJPRegular, fontWeight: "normal" },
    { src: NotoSansJPBold, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "NotoSansJP",
  },
  section: {
    marginBottom: 10,
  },
  subsection: {
    marginLeft: 5,
    marginBottom: 2,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 2,
    fontWeight: "bold",
    borderBottomWidth: 0.7,
    borderBottomColor: "#b8b8b8",
  },
  text: {
    fontSize: 12,
    fontWeight: "normal",
  },
  title: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  detail: {
    marginTop: 7,
    marginBottom: 4,
    fontSize: 12,
    fontWeight: "normal",
  },
});

const Resume: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>職務経歴書</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>概要</Text>
        <Text style={styles.text}>
          4年間の業界経験を通じ、ECサイトの運営とWebアプリケーションのフロントエンド開発に従事。
          フロントエンドではReact・Type Script・CSSでの構築が得意。
          開発ではコーディング規約とトンマナに気をつけチーム内のルールや連携を重視。
          常に最新の技術トレンドを追求することに情熱を注いでいる。
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>基本情報</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>祝井 直樹</Text>
          <Text style={styles.text}>id: nok181701</Text>
          <Text style={styles.text}>年齢: 26</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>職歴</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ウェブエッジ（2022/10〜現在）
          </Text>
          <Text style={styles.text}>- SESとして主に開発フェーズを担当</Text>
          <View style={styles.subsection}>
            <Text style={styles.title}>
              ブロックチェーンを利用したSNSアプリケーション開発（2023/6〜現在）
            </Text>
            <Text style={styles.text}>
              スクラム開発下でのフロントエンドを担当
            </Text>
            <Text style={styles.text}>開発規模 </Text>
            <Text style={styles.text}>
              ・平均 6〜8 人チームでのスクラム開発
            </Text>
            <Text style={styles.text}>使用した技術 </Text>
            <Text style={styles.text}>
              React(v18), Type Script, My SQL, Docker, CSS(Chakura UI)
            </Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>
              ・デザインと機能要件に応じてWEBフロントの実装
            </Text>
            <Text style={styles.text}>
              ・フロントエンドのパフォーマンスチューニング
            </Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.title}>CRMの開発（2022/10〜2023/5）</Text>
            <Text style={styles.text}>開発規模 </Text>
            <Text style={styles.text}>3人</Text>
            <Text style={styles.text}>使用した技術 </Text>
            <Text style={styles.text}>Java Script, My SQL</Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>・クライアントとの機能要件の調整</Text>
            <Text style={styles.text}>
              ・ローコードプラットフォームでは対応不可な部分の開発
            </Text>
            <Text style={styles.text}>・パフォーマンスチューニング </Text>
            <Text style={styles.text}>・単体/結合テストやリリースの実施</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社宝石広場（2020/4〜2022/10）</Text>
          <Text style={styles.text}>- WEBデザイン・ECサイト運用</Text>
          <Text style={styles.text}>
            - 自社サイトの改修や楽天市場の運用を担当
          </Text>
          <Text style={styles.text}>開発規模 </Text>
          <Text style={styles.text}>8~10人</Text>
          <Text style={styles.text}>使用した技術 </Text>
          <Text style={styles.text}>
            Photoshop, HTML, CSS, Java Script, jQuery
          </Text>
          <Text style={styles.text}> 主な担当業務</Text>
          <Text style={styles.text}>
            ・ 自社サイトやモール（楽天市場・Yahooショッピング）の改修・運用
          </Text>
          <Text style={styles.text}>
            ・ バナー、LPの要件定義からデザイン、コーディング
          </Text>
          <Text style={styles.text}>
            ・ 楽天市場の運用(販促クーポンの実施やメルマガの運用)
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験あり）</Text>
        <Text style={styles.text}>・React</Text>
        <View style={styles.subsection}>
          <Text style={styles.text}>- componentの改修</Text>
          <Text style={styles.text}>- hooksの新規・改修</Text>
          <Text style={styles.text}>- 各ページview/viewModel/の新規・改修</Text>
          <Text style={styles.text}>
            - 各ページstate(reducer/action)の新規・改修
          </Text>
        </View>
        <Text style={styles.text}>・Type Script</Text>
        <Text style={styles.text}>・CSS(Chakura UI)</Text>
        <Text style={styles.text}>・Docker</Text>
        <Text style={styles.text}>・My SQL</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験なし）</Text>
        <Text style={styles.text}>・Express</Text>
        <Text style={styles.text}>・Mongo DB</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>趣味プロダクト</Text>
        <Text style={styles.text}>
          git hub: https://github.com/nok181701/medal-map
        </Text>
        <Text style={styles.text}>
          プロダクト: https://medal-map.vercel.app/
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>最終学歴</Text>
        <Text style={styles.text}>武蔵大学 社会学部 社会学科 卒</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>資格</Text>
        <Text style={styles.text}>基本情報処理技術者（2023年11月）</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
```
