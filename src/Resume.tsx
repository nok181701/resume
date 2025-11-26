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
          リユース業界にてWebデザイナー・ECサイト運営として従事し、LPや自社ECサイトの静的ページを設計から実装まで担当。
          2022年に株式会社ウェブエッジに入社し、SESとして主にフロントエンドの開発に携わる。
          現在は株式会社トライトにて自社開発でUIUXやSEOの改善エンジニアとして開発。
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>基本情報</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>祝井 直樹</Text>
          <Text style={styles.text}>ID: nok181701</Text>
          <Text style={styles.text}>年齢: 28</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>得意なこと</Text>
        <Text style={styles.text}>Webサイト・アプリケーションの開発</Text>
        <Text style={styles.text}>
          -
          LP/Webアプリ/ネイティブアプリ（Android/iOS）の設計から構築まで一通りをこなせる
        </Text>
        <Text style={styles.text}>
          -
          デザイナー（仕様の相談）、バックエンド（APIを通じたデータ制御のやり取り）との連携
        </Text>
        <Text style={styles.text}>
          -
          SEOやサイトパフォーマンスを意識した実装、インフラを意識したNext.jsのレンダリング適切化が可能
        </Text>
        <Text style={styles.text}>- フロント/バックの実装</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>課題・苦手なこと</Text>
        <Text style={styles.text}>インフラ部分の実務経験</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>職歴</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社トライト（現在）</Text>
          <Text style={styles.text}>
            自社サイト『トライトワーカー』『看護師ワーカー』『介護ワーカー』など求人サイトの開発
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>開発規模</Text>
          <Text style={styles.text}>- 開発課25人うち所属(UIUXチーム)8人</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>使用した技術</Text>
          <Text style={styles.text}>- 主にNext.js(v13~v14), TypeScript</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>主な担当業務</Text>
          <Text style={styles.title}>
            LPO環境構築（PHPで実装されている旧LPサイトのリプレイス作業）
          </Text>
          <Text style={styles.text}>- 実装</Text>
          <Text style={styles.text}>- コードレビュー</Text>
          <Text style={styles.text}>
            - バックエンド/インフラ/ディレクターチームとの仕様確認・調整
          </Text>
          <Text style={styles.text}>- SESの方のサポート</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>
            旧グランドサイトから新サイトへの一部移管作業
          </Text>
          <Text style={styles.text}>- コラム特集ページの移管作業</Text>
          <Text style={styles.text}>
            - SREチームとのインフラ構成の変更・調整
          </Text>
          <Text style={styles.text}>
            - Next.js pages router→app routerへの移行
          </Text>
          <Text style={styles.text}>
            - インフラ構成変更によるNext.jsのレンダリング適切化
          </Text>

          <Text style={styles.text}> </Text>
          <Text style={styles.title}>SEO改善</Text>
          <Text style={styles.text}>
            -
            旧グランドサイトの求人一覧/求人詳細ページに新サイトURLのcanonical設定
          </Text>
          <Text style={styles.text}>
            - 各求人ページに対するテストコードの作成
          </Text>
        </View>
        <Text style={styles.text}> </Text>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ウェブエッジ（2022/10〜2024/9）
          </Text>
          <Text style={styles.text}>- SESとして主に開発フェーズを担当</Text>
          <View style={styles.subsection}>
            <Text style={styles.title}>
              ブロックチェーンを利用したSNSアプリケーション開発（2023/6〜現在）
            </Text>
            <Text style={styles.text}>
              スクラム開発下でのフロントエンドを担当
            </Text>
            <Text style={styles.text}>開発規模</Text>
            <Text style={styles.text}>- 平均 6〜8人</Text>
            <Text style={styles.text}>使用した技術</Text>
            <Text style={styles.text}>
              - React(v18), TypeScript, CSS(Chakra UI), NestJS(Node.js), MySQL,
              Docker
            </Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>
              - デザインと機能要件に応じてWebフロントの実装
            </Text>
            <Text style={styles.text}>
              - フロントエンド部分のパフォーマンス計測・改善
            </Text>
            <Text style={styles.text}>- フロントAPI開発</Text>
            <Text style={styles.text}>
              - 要件の不明点、バックエンド、フロントエンド改修範囲の洗い出し
            </Text>
            <Text style={styles.text}>
              - API・コンポーネント仕様書の作成・修正
            </Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.title}>CRMの開発（2022/10〜2023/5）</Text>
            <Text style={styles.text}>開発規模</Text>
            <Text style={styles.text}>- 3人</Text>
            <Text style={styles.text}>使用した技術</Text>
            <Text style={styles.text}>- JavaScript(ES6), MySQL</Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>- クライアントとの機能要件の調整</Text>
            <Text style={styles.text}>
              - ローコードプラットフォームでは対応不可な部分の開発
            </Text>
            <Text style={styles.text}>- パフォーマンスチューニング</Text>
            <Text style={styles.text}>- 単体テストの作成</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ユーズカンパニー（2020/4〜2022/9）
          </Text>
          <Text style={styles.text}>Webデザイン・ECサイト運用</Text>
          <Text style={styles.text}>
            自社サイト宝石広場の改修や楽天市場の運用を担当
          </Text>
          <Text style={styles.text}>開発規模</Text>
          <Text style={styles.text}>- 8〜10人</Text>
          <Text style={styles.text}>使用した技術</Text>
          <Text style={styles.text}>
            - Photoshop, HTML, CSS, JavaScript, jQuery
          </Text>
          <Text style={styles.text}>主な担当業務</Text>
          <Text style={styles.text}>
            - 自社サイトやモール（楽天市場・Yahooショッピング）の改修・運用
          </Text>
          <Text style={styles.text}>
            - バナー、LPの設計からデザイン、コーディング
          </Text>
          <Text style={styles.text}>
            -
            楽天市場の運用（商品ページの作成、販促クーポンの実施やメルマガの運用）
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>副業</Text>
        <Text style={styles.title}>株式会社UK Holdings（2020/4〜2022/9）</Text>
        <Text style={styles.text}>バス釣り向けのアプリケーション開発</Text>
        <Text style={styles.text}>- フロント部分を担当</Text>
        <Text style={styles.text}>
          - フロントはReact （TypeScript）でバックはNode.js（NestJS）
        </Text>
        <Text style={styles.text}></Text>
        <Text style={styles.title}>株式会社ギャス（2025/4〜）</Text>
        <Text style={styles.text}>
          FXデモトレードアプリ（iOS/Android）の開発
        </Text>
        <Text style={styles.text}>- フロント/バックを担当</Text>
        <Text style={styles.text}>
          - フロントはReact Native（JavaScript）でバックはPHP（Laravel）
        </Text>
        <Text style={styles.text}>
          - 既存画面の修正、新規画面の実装。それに伴うAPI・バッチの実装を担当
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験あり）</Text>
        <Text style={styles.text}>- React</Text>
        <Text style={styles.text}>- React Native (v0.75)</Text>
        <Text style={styles.text}>- TypeScript</Text>
        <Text style={styles.text}>- CSS(Chakra UI)</Text>
        <Text style={styles.text}>- Docker</Text>
        <Text style={styles.text}>- NestJS</Text>
        <Text style={styles.text}>- PHP (Laravel v10)</Text>
        <Text style={styles.text}>- MySQL</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験なし）</Text>
        <Text style={styles.text}>- Express</Text>
        <Text style={styles.text}>- MongoDB</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>趣味プロダクト</Text>
        <Text style={styles.text}>
          GitHub: https://github.com/nok181701/medal-map
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
