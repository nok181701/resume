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
          リユース業界にてWebデザイナー・ECサイト運営として従事し、LPや自社ECサイトの静的ページを設計から構築まで担当。
          2022年に株式会社ウェブエッジに入社し、SESとして主にフロントエンドの開発に携わりWebフロントの設計やReact.js、JavaScript/TypeScriptで実装を担当。
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>基本情報</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>祝井 直樹</Text>
          <Text style={styles.text}>ID: nok181701</Text>
          <Text style={styles.text}>年齢: 26</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>得意なこと</Text>
        <Text style={styles.text}>Webサイト・アプリケーションの開発</Text>
        <Text style={styles.text}>
          ・LPやコーポレートサイトなど、静的ページの設計から構築まで一通りをこなせる
        </Text>
        <Text style={styles.text}>
          ・対象のプロダクトが訴求・解決する力を理解し設計・デザインUIに落とし込む
        </Text>
        <Text style={styles.text}>
          ・デザイナー（仕様の相談）、バックエンド（APIを通じたデータ制御のやり取り）との連携
        </Text>
        <Text style={styles.text}>
          ・スクラム開発を用いた開発・チームビルディング
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>苦手なこと</Text>
        <Text style={styles.text}>
          サーバーサイド・インフラ部分の業務（業務経験が浅い）
        </Text>
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
            <Text style={styles.text}>・平均 6〜8 人</Text>
            <Text style={styles.text}>使用した技術 </Text>
            <Text style={styles.text}>
              React(v18), Type Script, CSS(Chakura UI),NestJS(node.js), My SQL,
              Docker,
            </Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>
              ・デザインと機能要件に応じてWEBフロントの実装
            </Text>
            <Text style={styles.text}>
              ・フロントエンド部分のパフォーマンス計測・改善
            </Text>
            <Text style={styles.text}>・API開発</Text>
            <Text style={styles.text}>
              ・要件の不明点、バックエンド、フロントエンド改修範囲の洗い出し
            </Text>
            <Text style={styles.text}>
              ・API、コンポーネント仕様書の作成・修正
            </Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.title}>CRMの開発（2022/10〜2023/5）</Text>
            <Text style={styles.text}>開発規模 </Text>
            <Text style={styles.text}>3人</Text>
            <Text style={styles.text}>使用した技術 </Text>
            <Text style={styles.text}>Java Script(ES6), My SQL</Text>
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
          <Text style={styles.title}>株式会社宝石広場（2020/4〜2022/9）</Text>
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
            ・ バナー、LPの設計からデザイン、コーディング
          </Text>
          <Text style={styles.text}>
            ・楽天市場の運用(商品ページの作成、販促クーポンの実施やメルマガの運用)
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験あり）</Text>
        <Text style={styles.text}>・React</Text>
        <View style={styles.subsection}>
          <Text style={styles.text}>- componentの設計・改修</Text>
          <Text style={styles.text}>- Custom Hookの追加・改修</Text>
          <Text style={styles.text}>- 各ページview/viewModel/の新規・改修</Text>
          <Text style={styles.text}>
            - 各ページstate(reducer/action)の新規・改修
          </Text>
        </View>
        <Text style={styles.text}>・Type Scriptによる型定義</Text>
        <Text style={styles.text}>・CSS(Chakura UI)</Text>
        <Text style={styles.text}>・Dockerでの環境構築</Text>
        <Text style={styles.text}>・NestJSでのエンドポイント開発</Text>
        <Text style={styles.text}>・My SQLでのCRUD操作</Text>
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
