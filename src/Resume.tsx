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
    marginBottom: 6,
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
    lineHeight: 1.4,
    marginBottom: 4,
  },
  title: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  meta: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 3,
  },
  tech: {
    fontSize: 10,
    color: "#0a5fa8",
    marginBottom: 2,
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
          大学卒業後、7年間にわたりサイト・システム開発に従事しています。
          1社目の株式会社ユーズカンパニーでは、自社ECサイト「宝石広場」の改修や楽天市場の運営を担当。バナーやLPの設計からデザイン・コーディングまで一貫して担当し、商品ページ作成や販促施策の運用にも携わりました。
          2社目の株式会社ウェブエッジでは、SESエンジニアとして複数のプロジェクトに参画。CRM開発ではローコードプラットフォームで対応できない部分の実装やパフォーマンスチューニングを担当し、その後はブロックチェーンを利用したSNSアプリケーション開発でフロントエンド実装とパフォーマンス改善を担当しました。
          現在は株式会社トライトキャリアにて、求人サイトのフロントエンド開発を担当。CakePHPからNext.jsへのリプレイス対応や、canonical設定によるSEO評価の集約などパフォーマンス・SEO改善にも取り組んでいます。
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>基本情報</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>祝井 直樹</Text>
          <Text style={styles.text}>年齢: 29</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>職歴</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社トライトキャリア（2024/10〜現在）
          </Text>
          <Text style={styles.text}>
            求人サイト『看護師ワーカー』をはじめ、介護・保育など複数の職種特化型求人サイトのフロントエンド開発を担当
          </Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ① 各職種LP登録サイトのリプレイス対応
            </Text>
            <Text style={styles.meta}>
              期間: 2024/10〜2025/4 / 職種: フロントエンドエンジニア / 役割:
              メンバー / 体制: 開発課25人
            </Text>
            <Text style={styles.text}>{`担当業務:
- 他職種展開の前に、スモールスケールで特定の職種を先行して担当。
- バックエンドチームと連携し、既存システム(Cake PHP)を読み取り、現行仕様の確認。
- Next.jsの静的エクスポート機能を使い、S3に資材を置きCloudFrontで配信管理が実現可能かどうかSREチームと連携して作業。
- 事業部側と連携しながらGTMの発火確認、外部のABテストツールが使用できるかどうかの確認。
- 他職種のコードレビュー。`}</Text>
            <Text style={styles.tech}>
              利用技術: Next.js(v14), TypeScript, CakePHP(既存システム)
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>② SEO・パフォーマンス改善</Text>
            <Text style={styles.meta}>
              期間: 2025/8〜2025/10 / 職種: フロントエンドエンジニア / 役割:
              リーダー / 体制: 開発課2人
            </Text>
            <Text style={styles.text}>{`担当業務:
- 新ドメインから旧ドメインへSEO評価集約のため、新ドメインサイトの一覧ページと求人ページにcanonical設定。
- 事業部側から10万件以上の求人データを受領し、その求人ページにcanonicalタグが載るようにマッピング処理を追加。`}</Text>
            <Text style={styles.tech}>利用技術: Next.js(v13) Python3</Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>③ 各職種コラム特集ページの移管対応</Text>
            <Text style={styles.meta}>
              期間: 2025/9〜現在 / 職種: フロントエンドエンジニア / 役割:
              リーダー / 体制: 開発課2人
            </Text>
            <Text style={styles.text}>{`担当業務:
- 事業部側と連携し移管先のコラム雛形を設計・実装を担当。
- ライターさんがCMS上でコラム記事を作成し反映。ソース側はCIのタイミングでSSGを行い、CMS側のコラムデータを取得してS3 + CloudFrontで配信する構成。
- 既存コラムNext.js(v13)から新コラムNext.js(v14)へ、SSRからSSGへのリプレイスを実装。
- ライターさんが編集したコラム記事をその場で確認したいため、プレビュー機能(CSR)の実装。
- 事業部側の人が好きなタイミングで記事を公開したいため、slack経由でのデプロイをSREチームと連携して実現。
- 他職種コラムサイトへの横展開。`}</Text>
            <Text style={styles.tech}>
              利用技術: Next.js(v13), Next.js(v14), TypeScript, microCMS
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>④ 電話番号LP開発</Text>
            <Text style={styles.meta}>
              期間: 2025/10〜現在 / 職種: フロントエンドエンジニア / 役割:
              リーダー / 体制: 開発課25人・UIUXチーム8人
            </Text>
            <Text style={styles.text}>{`担当業務:
- ユーザーが営業の方からの電話番号を検索したときに専用LPがヒットするように開発。
- 事業部側と連携し電話番号LPの雛形を設計・実装を担当。
- コラムと同じ構成。
- サイトマップ・構造化データの実装。
- 他職種サイトへの横展開。`}</Text>
            <Text style={styles.tech}>
              利用技術: Next.js(v13), Next.js(v14), TypeScript, microCMS
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>⑤ EOL対応</Text>
            <Text style={styles.meta}>
              期間: 2025/10〜現在 / 職種: フロントエンドエンジニア / 役割:
              メンバー / 体制: 開発課25人
            </Text>
            <Text style={styles.text}>{`担当業務:
- 既存システム(CakePHP)のクローズおよび新システムへの繋ぎ込みに伴う担当職種の仕様確認と実装。
`}</Text>
            <Text style={styles.tech}>
              利用技術: Next.js(v14) CakePHP(既存システム)
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>⑥ AI活用による開発効率化</Text>
            <Text style={styles.meta}>
              期間: 不定期 / 職種: フロントエンドエンジニア / 役割: メンバー /
              体制: チーム内5人
            </Text>
            <Text style={styles.text}>
              概要:
              複数の職種サイトを横断する開発を効率化するため、不定期にAI活用を推進。
            </Text>
            <Text style={styles.text}>{`担当業務:
- GitHub Copilot向けのSkills / Instructions / Promptをmdファイルとして整備・導入
- Confluence MCPサーバーの導入をSREチームに依頼`}</Text>
            <Text style={styles.tech}>
              利用技術: GitHub Copilot, Confluence MCP
            </Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ウェブエッジ（2022/10〜2024/9）
          </Text>
          <Text style={styles.text}>
            SESエンジニアとして複数のプロジェクトに参画
          </Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ①
              ブロックチェーンを利用したSNSアプリケーション開発（2023/6〜2024/9）
            </Text>
            <Text style={styles.meta}>
              職種: フロントエンドエンジニア（SES） / 役割: メンバー / 体制:
              平均6〜8人（スクラム開発体制）
            </Text>
            <Text style={styles.text}>
              概要:
              ブロックチェーンを利用したSNSアプリケーションのフロントエンド開発
            </Text>
            <Text style={styles.text}>{`担当業務:
- デザイン・機能要件に基づくフロントエンド実装
- フロントAPI開発
- 要件の不明点・改修範囲の洗い出し
- API・コンポーネント仕様書の作成・更新`}</Text>
            <Text style={styles.text}>
              実績・取組: フロントエンドのパフォーマンス計測・改善
            </Text>
            <Text style={styles.tech}>
              利用技術: React（v18）, TypeScript, Chakra UI, NestJS（Node.js）,
              MySQL, Docker
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>② CRM開発（2022/10〜2023/5）</Text>
            <Text style={styles.meta}>
              職種: エンジニア（SES） / 役割: メンバー / 体制: 3人
            </Text>
            <Text style={styles.text}>概要: クライアント向けCRMの開発</Text>
            <Text style={styles.text}>{`担当業務:
- クライアントとの機能要件の調整
- ローコードプラットフォームで対応不可な部分の開発
- 単体テストの作成`}</Text>
            <Text style={styles.text}>
              実績・取組: パフォーマンスチューニング
            </Text>
            <Text style={styles.tech}>利用技術: JavaScript（ES6）, MySQL</Text>
          </View>
        </View>

        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ユーズカンパニー（2020/4〜2022/9）
          </Text>
          <Text style={styles.meta}>
            Webデザイン・ECサイト運用 / 職種: Webデザイナー・ECサイト運用担当 /
            役割: メンバー / 体制: 8〜10人
          </Text>
          <Text style={styles.text}>
            概要: 自社サイト「宝石広場」の改修や楽天市場の運用
          </Text>
          <Text style={styles.text}>{`担当業務:
- 自社サイト・モール（楽天市場・Yahooショッピング）の改修・運用
- バナー・LPの設計からデザイン・コーディングまで一貫して担当`}</Text>
          <Text style={styles.text}>
            実績・取組:
            楽天市場の運用（商品ページ作成、販促クーポン・メルマガの運用）
          </Text>
          <Text style={styles.tech}>
            利用技術: Photoshop, HTML, CSS, JavaScript, jQuery
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>副業</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社ギャス（2025/4〜現在）</Text>
          <Text style={styles.text}>業務委託として複数プロジェクトに参画</Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>① FXデモトレードアプリ開発</Text>
            <Text style={styles.meta}>
              期間: 2025/4〜2026/8 / 職種: モバイルアプリエンジニア / 役割:
              メンバー
            </Text>
            <Text style={styles.text}>
              概要: React
              NativeとLaravelを用いたFXデモトレードアプリ（iOS/Android）の開発
            </Text>
            <Text style={styles.text}>{`担当業務:
- ユーザー同士の損益額を競い合うリーグランキングシステムの開発
  - ランキング集計時に行う昇格・降格ロジック、バッチ（週次リセット・グループ自動配置/分割・隣接リーグ合併）の実装
  - アプリ側は昇格・降格アニメーション、リーグ推移・統計画面のUI実装を担当
- 1日1回できるガチャシステムの開発（画面・アニメーション）
  - ガチャ演出アニメーション、導入ページ・トースト通知の実装
- マイページ・他ユーザープロフィール画面/API実装
  - プロフィール情報取得API、資金推移取得API、FX口座開設イベント送信フラグ管理などのAPI実装
- 高額利益者リストの速報アニメーション表示機能の開発
  - 5分間隔でのポーリング制御、モーダルUI、ユーザー押下時のプロフィール遷移実装
- アプリ内 / 外レビューモーダルの実装
  - レベルアップ時の表示制御、react-native-rateを用いた外部ストア誘導、「今後表示しない」機能
- ios/androidのクラッシュやANR原因の解消
- TestFlightでの動作確認`}</Text>
            <Text style={styles.tech}>
              利用技術: React Native, TypeScript, Lottie/Rive,
              Laravel（PHP8.1）, Laravel Sanctum, MySQL
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ② 管理画面開発（フィットネスクラブ・スクール運営SaaS）
            </Text>
            <Text style={styles.meta}>
              期間: 2026/8〜現在 / 職種: フロントエンド・バックエンドエンジニア
              / 役割: メンバー
            </Text>
            <Text style={styles.text}>
              概要:
              フィットネスクラブ・スクール運営会社向けSaaSの事務局向け管理画面。マルチテナント・マルチクラブ構成に対応し、テナント/クラブ単位で認証・権限・テーマを切り替えられる構成。フロント・バックエンド双方を担当。
            </Text>
            <Text style={styles.text}>{`担当業務:
- モックに沿った画面(スケジュール管理・出席確認・体験申込・退会休止・スタッフ管理・支払い管理・イベント管理)などを実装。
`}</Text>
            <Text style={styles.tech}>
              利用技術: Angular 22（Zoneless / Signalベース / OnPush）,
              TypeScript,
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>GitHub</Text>
        <Text style={styles.text}>GitHub: https://github.com/nok181701</Text>
        <Text style={styles.subHeader}>個人開発</Text>
        <Text style={styles.text}>
          東京23区の町丁目ごとに治安・洪水・地盤（液状化）・高潮を可視化する引越し先リサーチダッシュボード。
        </Text>
        <Text style={styles.text}>
          PR: https://github.com/nok181701/sumipita
        </Text>
        <Text style={styles.text}>URL: https://sumipita.com</Text>
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
