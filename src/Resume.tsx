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
          大学卒業後、リユース系ECサイトのWebデザイナー・運用担当。
          その後株式会社ウェブエッジへ入社し、SESエンジニアとしてCRM開発やWebアプリケーション開発に従事。
          現在は株式会社トライトにて求人サイトのフロントエンドエンジニアとして、SEO改善・パフォーマンス最適化に取り組んでいる。
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
        <Text style={styles.text}>
          - LP / Webアプリ /
          ネイティブアプリ（Android/iOS）の設計から実装まで一貫して対応できる
        </Text>
        <Text style={styles.text}>
          - コンテンツの要件に応じたフロントエンド技術の選定が可能
        </Text>
        <Text style={styles.text}>- SEOやパフォーマンスを意識した実装</Text>
        <Text style={styles.text}>
          - TypeScriptの可読性・堅牢性の観点でベストプラクティスを意識した実装
        </Text>
        <Text style={styles.text}>
          - 他部署を巻き込んだプロジェクト推進が可能
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>課題・苦手なこと</Text>
        <Text style={styles.text}>インフラ部分の実務経験</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>職歴</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社トライト（2024/10〜現在）</Text>
          <Text style={styles.text}>
            求人サイト『トライトワーカー』『看護師ワーカー』『介護ワーカー』などのフロントエンド開発を担当
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>開発規模</Text>
          <Text style={styles.text}>
            - 開発課25人 / 所属チーム（UIUXチーム）8人
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>使用技術</Text>
          <Text style={styles.text}>
            - Next.js（v13〜v14）, TypeScript, CakePHP
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>主な担当業務</Text>
          <Text style={styles.title}>CakePHP → Next.js へのリプレイス対応</Text>
          <Text style={styles.text}>- 実装・コードレビュー</Text>
          <Text style={styles.text}>
            - バックエンド / インフラ / ディレクターチームとの仕様調整
          </Text>
          <Text style={styles.text}>- SESメンバーのサポート</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>
            Next.js pages router → app router へのリプレイス対応
          </Text>
          <Text style={styles.text}>- コラム特集ページの移管作業</Text>
          <Text style={styles.text}>- SREチームとのインフラ構成変更・調整</Text>
          <Text style={styles.text}>
            - インフラ構成変更に伴うNext.jsのレンダリング最適化
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>SEO・パフォーマンス改善</Text>
          <Text style={styles.text}>
            - 旧サイトの求人一覧・詳細ページに新サイトURLのcanonical設定
          </Text>
          <Text style={styles.text}>
            - 新規サービスへのcanonicalタグ設定によりSEO評価を既存サービスへ集約
          </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>EOL対応</Text>
          <Text style={styles.text}>- コンテンツ終了に伴うディスコン作業</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.title}>Sentryエラー対応</Text>
          <Text style={styles.text}>- Sentryでのエラー検知と解消対応</Text>
        </View>
        <Text style={styles.text}> </Text>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ウェブエッジ（2022/10〜2024/9）
          </Text>
          <Text style={styles.text}>
            SESエンジニアとして複数のプロジェクトに参画
          </Text>
          <View style={styles.subsection}>
            <Text style={styles.title}>
              ブロックチェーンを利用したSNSアプリケーション開発（2023/6〜2024/9）
            </Text>
            <Text style={styles.text}>
              スクラム開発体制でのフロントエンドを担当
            </Text>
            <Text style={styles.text}>開発規模</Text>
            <Text style={styles.text}>- 平均 6〜8人</Text>
            <Text style={styles.text}>使用技術</Text>
            <Text style={styles.text}>
              - React（v18）, TypeScript, Chakra UI, NestJS（Node.js）, MySQL,
              Docker
            </Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>
              - デザイン・機能要件に基づくフロントエンド実装
            </Text>
            <Text style={styles.text}>
              - フロントエンドのパフォーマンス計測・改善
            </Text>
            <Text style={styles.text}>- フロントAPI開発</Text>
            <Text style={styles.text}>- 要件の不明点・改修範囲の洗い出し</Text>
            <Text style={styles.text}>
              - API・コンポーネント仕様書の作成・更新
            </Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.title}>CRM開発（2022/10〜2023/5）</Text>
            <Text style={styles.text}>開発規模</Text>
            <Text style={styles.text}>- 3人</Text>
            <Text style={styles.text}>使用技術</Text>
            <Text style={styles.text}>- JavaScript（ES6）, MySQL</Text>
            <Text style={styles.text}>主な担当業務</Text>
            <Text style={styles.text}>- クライアントとの機能要件の調整</Text>
            <Text style={styles.text}>
              - ローコードプラットフォームで対応不可な部分の開発
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
            自社サイト「宝石広場」の改修や楽天市場の運用を担当
          </Text>
          <Text style={styles.text}>開発規模</Text>
          <Text style={styles.text}>- 8〜10人</Text>
          <Text style={styles.text}>使用技術</Text>
          <Text style={styles.text}>
            - Photoshop, HTML, CSS, JavaScript, jQuery
          </Text>
          <Text style={styles.text}>主な担当業務</Text>
          <Text style={styles.text}>
            - 自社サイト・モール（楽天市場・Yahooショッピング）の改修・運用
          </Text>
          <Text style={styles.text}>
            - バナー・LPの設計からデザイン・コーディングまで一貫して担当
          </Text>
          <Text style={styles.text}>
            - 楽天市場の運用（商品ページ作成、販促クーポン・メルマガの運用）
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>副業</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社UK Holdings（2020/4〜2022/9）
          </Text>
          <Text style={styles.text}>バス釣り向けアプリケーション開発</Text>
          <Text style={styles.text}>
            - フロントはReact（TypeScript）、バックはNode.js（NestJS）
          </Text>
          <Text style={styles.text}>- フロントエンド部分を担当</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社ギャス（2025/4〜）</Text>
          <Text style={styles.text}>
            React
            NativeとLaravelを用いたFXデモトレードアプリ（iOS/Android）の開発
          </Text>
          <Text style={styles.text}>
            - フロントはReact Native（JavaScript）、バックはPHP（Laravel）
          </Text>
          <Text style={styles.text}>- フロントエンド / バックエンドを担当</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>主な実績</Text>
          <Text style={styles.text}>
            -
            リーグランキングシステムの開発（画面・アニメーション・API・バッチ処理）
          </Text>
          <Text style={styles.text}>- マイページ画面・API実装</Text>
          <Text style={styles.text}>
            -
            高額利益者リストの速報アニメーション表示機能の開発（5分間隔のリアルタイム表示）
          </Text>
          <Text style={styles.text}>- アプリ内 / 外レビューモーダルの実装</Text>
          <Text style={styles.text}>
            -
            自動損切処理のパフォーマンス改善（トランザクション粒度の最適化・通知タイミングの見直し）
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>スキル（実務経験あり）</Text>
        <Text style={styles.text}>- React</Text>
        <Text style={styles.text}>- React Native (v0.75)</Text>
        <Text style={styles.text}>- TypeScript</Text>
        <Text style={styles.text}>- CSS（Chakra UI）</Text>
        <Text style={styles.text}>- Docker</Text>
        <Text style={styles.text}>- NestJS</Text>
        <Text style={styles.text}>- PHP（Laravel v10）</Text>
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
