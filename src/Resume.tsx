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

// react-pdf は音節の区切り(漢字/かな/カナなど文字種の切れ目も含む)で改行すると "-" を挿入する。
// 日本語は1文字ずつ区切り、前後に空文字(幅0の空白扱い)を挟んでハイフンなしで改行できるようにする。
// 英数字の連続は分割せず、句読点・閉じ括弧は直前の文字にくっつけて行頭に来ないようにする
const CJK = "\\u3000-\\u30ff\\u3400-\\u9fff\\uff00-\\uffef";
const CJK_TOKEN = new RegExp(`[${CJK}][、。,.)）」』】・ー]*|[^${CJK}]+`, "g");
const CJK_START = new RegExp(`^[${CJK}]`);
Font.registerHyphenationCallback((word) => {
  const tokens = word.match(CJK_TOKEN) ?? [word];
  const parts = tokens.flatMap((token) =>
    CJK_START.test(token) ? ["", token, ""] : [token],
  );
  return parts.filter((part, i) => part !== "" || parts[i - 1] !== "");
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "NotoSansJP",
  },
  // 下の余白を marginBottom で取ると、ページ末尾に収まるブロックでも余白分はみ出す扱いになり
  // ブロック全体が次ページへ送られて大きな空白ができるため、paddingBottom で取る
  section: {
    paddingBottom: 10,
  },
  subsection: {
    marginLeft: 5,
    paddingBottom: 16,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 14,
    marginVertical: 2,
    fontWeight: "bold",
    borderBottomWidth: 0.7,
    borderBottomColor: "#b8b8b8",
  },
  // 本文は職務内容(表)と同じ文字サイズに揃える
  bodyText: {
    fontSize: 8.5,
    lineHeight: 1.35,
    marginBottom: 4,
  },
  title: {
    marginTop: 3,
    fontSize: 11,
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
    paddingBottom: 10,
    fontSize: 11,
    fontWeight: "normal",
  },
  // 表の下の余白も同じ理由で親要素の paddingBottom で取る
  table: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#c9c9c9",
    borderRadius: 3,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
  },
  tableRowLast: {
    flexDirection: "row",
  },
  tableLabel: {
    width: "22%",
    backgroundColor: "#f2f2f2",
    padding: 4,
    fontSize: 8.5,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: "#c9c9c9",
  },
  tableValue: {
    width: "78%",
    padding: 4,
    fontSize: 8.5,
    lineHeight: 1.35,
  },
  skillHeaderRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
  },
  skillCategory: {
    width: "15%",
    backgroundColor: "#f2f2f2",
    padding: 4,
    fontSize: 8.5,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: "#c9c9c9",
  },
  skillName: {
    width: "22%",
    padding: 4,
    fontSize: 8.5,
    borderRightWidth: 1,
    borderRightColor: "#c9c9c9",
  },
  skillYears: {
    width: "12%",
    padding: 4,
    fontSize: 8.5,
    borderRightWidth: 1,
    borderRightColor: "#c9c9c9",
  },
  skillDesc: {
    width: "51%",
    padding: 4,
    fontSize: 8.5,
    lineHeight: 1.35,
  },
});

const Resume: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>職務経歴書</Text>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        概要
      </Text>
      <View style={styles.section}>
        <Text
          style={styles.bodyText}
        >{`大学卒業後、7年間にわたりサイト・システム開発に従事しています。
1社目では、自社ECサイトの画面改修やモール運営を担当しました。
2社目では、SESエンジニアとしてCRM開発やSNSアプリケーション開発に従事しました。
現在は、求人サイトのフロントエンド開発を担当。CakePHPからNext.jsへのリプレイスやSEO・パフォーマンス改善に取り組んでいます。
また副業として参画し、フロント・バックを問わずネイティブアプリ開発や、SaaS開発にも携わっています。`}</Text>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        基本情報
      </Text>
      <View style={styles.section}>
        <View style={styles.detail}>
          <Text style={styles.bodyText}>祝井 直樹</Text>
          <Text style={styles.bodyText}>年齢: 29</Text>
        </View>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        職歴
      </Text>
      <View style={styles.section}>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社トライトキャリア（2024/10〜現在）
          </Text>
          <Text style={styles.bodyText}>
            求人サイト『看護師ワーカー』をはじめ、介護・保育など複数の職種特化型求人サイトのフロントエンド開発を担当
          </Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>① 電話番号LP開発</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2025/10〜現在</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / リーダー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>開発課2人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>目的</Text>
                <Text
                  style={styles.tableValue}
                >{`営業担当者が求職者に電話をかけても出てもらえないケースがあり、ユーザーが着信番号を検索する動きが一定数存在。しかしその検索時に表示されるのは電話帳ナビなどの外部サイトであり、自社との接点を損失。またLPを作成しても1ページ単体ではSEO的に評価されづらく、流入に繋がらないのが課題。
そのため、着信番号を検索したユーザーが自社の電話番号LPに自然に流入できる構造を開発。`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- ユーザーが営業担当者の電話番号を検索したときに専用LPがヒットするように開発。
- 事業部側と連携し電話番号LPの雛形を設計・実装を担当。
- サイトマップ・構造化データの実装。
- 営業担当者がCMS上で作成したプロフィール記事を、CIのタイミングでSSGビルドし、S3 + CloudFrontで配信する構成。
- 営業担当者が好きなタイミングで記事を公開したいため、Slack経由でのデプロイをSREチームと連携して実現。
- 他職種サイトへの横展開。`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>結果</Text>
                <Text
                  style={styles.tableValue}
                >{`1職種で2025/10から施策実施中（月間架電数 約1.3万件）。
これまで外部サイトに流れていた着信番号の検索ユーザーのうち、月に約70人が自社LPに流入し、約10件が求職者からの連絡につながっている。
- 番号検索率: 約5%
- 検索結果からのLP CTR: 約11%
- LP内スクロール90%到達率: 約14%
- 連絡ボタンクリック（接触アクション）: 月平均約10件`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  Next.js(v13), Next.js(v14), TypeScript, microCMS
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>② EOL対応</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2025/10〜現在</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>開発課25人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- 既存システム(CakePHP)のクローズおよび新システムへの繋ぎ込みに伴う担当職種の仕様確認と実装。
- 複数職種・複数リポジトリにまたがるEOL対応にあたり、各リポジトリを管理する複数の代理店向けに実装手順書を作成。`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  Next.js(v14), CakePHP(既存システム)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>③ 各職種コラム特集ページの移管対応</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2025/9〜現在</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / リーダー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>開発課2人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- 事業部側と連携し移管先のコラム雛形を設計・実装を担当。
- ライターがCMS上で作成したコラム記事を、CIのタイミングでSSGビルドし、S3 + CloudFrontで配信する構成。
- 既存コラムNext.js(v13)から新コラムNext.js(v14)へ、SSRからSSGへのリプレイスを実装。
- ライターさんが編集したコラム記事をその場で確認したいため、プレビュー機能(CSR)の実装。
- 事業部側の人が好きなタイミングで記事を公開したいため、Slack経由でのデプロイをSREチームと連携して実現。
- 他職種コラムサイトへの横展開。`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>導入効果</Text>
                <Text
                  style={styles.tableValue}
                >{`- コラム記事からの登録サイト流入数の増加（1職種での例）
  - コラム流入: 移行時 約9,000 → 12ヶ月後 約40,000セッション/月
  - 成約数: 移行後12ヶ月で約4倍に増加
- 既存ドメインサイトのSEO評価向上。
- コンテンツの有効活用・配信バリエーションの増加。`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  Next.js(v13), Next.js(v14), TypeScript, microCMS
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>④ SEO・パフォーマンス改善</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2025/8〜2025/10</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / リーダー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>開発課2人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- 新ドメインから旧ドメインへSEO評価集約のため、新ドメインサイトの一覧ページと求人ページにcanonical設定。
- 事業部側から10万件以上の求人データを受領し、その求人ページにcanonicalタグが載るようにマッピング処理を追加。`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>Next.js(v13), Python3</Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ⑤ 各職種LP登録サイトのリプレイス対応
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2024/10〜2025/4</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>開発課25人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- 他職種展開の前に、スモールスケールで特定の職種を先行して担当。
- バックエンドチームと連携し、既存システム(CakePHP)を読み取り、現行仕様の確認。
- Next.jsの静的エクスポート機能を使い、S3に資材を置きCloudFrontで配信管理が実現可能かどうかSREチームと連携して作業。
- 事業部側と連携しながらGTMの発火確認、外部のABテストツールが使用できるかどうかの確認。
- 他職種のコードレビュー。`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>課題</Text>
                <Text
                  style={styles.tableValue}
                >{`Next.jsの静的エクスポート(next export)はデフォルトで/outフォルダにHTMLを出力するため、そのままS3 + CloudFrontにデプロイすると「ドメイン/out/...」という階層でしか表示されない問題があった。
CI（ymlファイル）に、/out配下のHTMLファイルをルート直下へmvするステップを追加し、ドメイン直下で正しく表示されるように解決。`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  Next.js(v14), TypeScript, CakePHP(既存システム)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>⑥ AI活用による開発効率化</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>不定期</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>チーム内5人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>概要</Text>
                <Text style={styles.tableValue}>
                  複数の職種サイトを横断する開発を効率化するため、不定期にAI活用を推進。
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- GitHub Copilot向けのSkills / Instructions / Promptをmdファイルとして整備・導入
- Confluence MCPサーバーの導入をSREチームに依頼`}</Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  GitHub Copilot, Confluence MCP
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ウェブエッジ（2022/10〜2024/9）
          </Text>
          <Text style={styles.bodyText}>
            SESエンジニアとして複数のプロジェクトに参画
          </Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ①
              ブロックチェーンを利用したSNSアプリケーション開発（2023/6〜2024/9）
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンドエンジニア（SES） / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>
                  平均6〜8人（スクラム開発体制）
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>概要</Text>
                <Text style={styles.tableValue}>
                  ブロックチェーンを利用したSNSアプリケーションのフロントエンド開発
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- デザイン・機能要件に基づくフロントエンド実装
- フロントAPI開発
- 要件の不明点・改修範囲の洗い出し
- API・コンポーネント仕様書の作成・更新`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>実績・取組</Text>
                <Text style={styles.tableValue}>
                  フロントエンドのパフォーマンス計測・改善
                </Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  React（v18）, TypeScript, Chakra UI, NestJS（Node.js）, MySQL,
                  Docker
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>② CRM開発（2022/10〜2023/5）</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  エンジニア（SES） / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>体制</Text>
                <Text style={styles.tableValue}>3人</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>概要</Text>
                <Text style={styles.tableValue}>クライアント向けCRMの開発</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- クライアントとの機能要件の調整
- ローコードプラットフォームで対応不可な部分の開発
- 単体テストの作成`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>実績・取組</Text>
                <Text style={styles.tableValue}>
                  パフォーマンスチューニング
                </Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>JavaScript（ES6）, MySQL</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.detail}>
          <Text style={styles.title}>
            株式会社ユーズカンパニー（2020/4〜2022/9）
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>職種 / 役割</Text>
              <Text style={styles.tableValue}>
                Webデザイナー・ECサイト運用担当 / メンバー
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>体制</Text>
              <Text style={styles.tableValue}>8〜10人</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>概要</Text>
              <Text style={styles.tableValue}>
                自社サイト「宝石広場」の改修や楽天市場の運用
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>担当業務</Text>
              <Text
                style={styles.tableValue}
              >{`- 自社サイト・モール（楽天市場・Yahooショッピング）の改修・運用
- バナー・LPの設計からデザイン・コーディングまで一貫して担当`}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>実績・取組</Text>
              <Text style={styles.tableValue}>
                楽天市場の運用（商品ページ作成、販促クーポン・メルマガの運用）
              </Text>
            </View>
            <View style={styles.tableRowLast}>
              <Text style={styles.tableLabel}>利用技術</Text>
              <Text style={styles.tableValue}>
                Photoshop, HTML, CSS, JavaScript, jQuery
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        副業
      </Text>
      <View style={styles.section}>
        <View style={styles.detail}>
          <Text style={styles.title}>株式会社ギャス（2025/4〜現在）</Text>
          <Text style={styles.bodyText}>
            業務委託として複数プロジェクトに参画
          </Text>

          <View style={styles.subsection}>
            <Text style={styles.title}>
              ① 管理画面開発（フィットネスクラブ・スクール運営SaaS）
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2026/8〜現在</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  フロントエンド・バックエンドエンジニア / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>概要</Text>
                <Text style={styles.tableValue}>
                  フィットネスクラブ・スクール運営会社向けSaaSの事務局向け管理画面。マルチテナント・マルチクラブ構成に対応し、テナント/クラブ単位で認証・権限・テーマを切り替えられる構成。フロント・バックエンド双方を担当。
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text style={styles.tableValue}>
                  モックに沿った画面(スケジュール管理・出席確認・体験申込・退会休止・スタッフ管理・支払い管理・イベント管理)などを実装。
                </Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  Angular 22（Zoneless / Signalベース / OnPush）, TypeScript
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.title}>② FXデモトレードアプリ開発</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>期間</Text>
                <Text style={styles.tableValue}>2025/4〜2026/8</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>職種 / 役割</Text>
                <Text style={styles.tableValue}>
                  モバイルアプリエンジニア / メンバー
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>概要</Text>
                <Text style={styles.tableValue}>
                  React
                  NativeとLaravelを用いたFXデモトレードアプリ（iOS/Android）の開発
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>担当業務</Text>
                <Text
                  style={styles.tableValue}
                >{`- ユーザー同士の損益額を競い合うリーグランキングシステムの開発
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
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.tableLabel}>利用技術</Text>
                <Text style={styles.tableValue}>
                  React Native, TypeScript, Lottie/Rive, Laravel（PHP8.1）,
                  Laravel Sanctum, MySQL
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        スキル一覧
      </Text>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.skillHeaderRow}>
            <Text style={styles.skillCategory}>カテゴリ</Text>
            <Text style={styles.skillName}>技術</Text>
            <Text style={styles.skillYears}>経験年数</Text>
            <Text style={styles.skillDesc}>内容</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}>言語</Text>
            <Text style={styles.skillName}>JavaScript / TypeScript</Text>
            <Text style={styles.skillYears}>7年 / 4年</Text>
            <Text style={styles.skillDesc}>
              実務・個人開発で日常的に使っていて、読み書きは問題なくできる。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>PHP</Text>
            <Text style={styles.skillYears}>1年半</Text>
            <Text style={styles.skillDesc}>
              実務でiOS/Androidアプリのバックエンド開発に使用。読み書きは問題なくできる。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}>フレームワーク</Text>
            <Text style={styles.skillName}>React / Next.js</Text>
            <Text style={styles.skillYears}>5年 / 4年</Text>
            <Text style={styles.skillDesc}>
              実務・個人開発で日常的に使っていて、読み書きは問題なくできる。Next.jsでは、13・14系の実務経験があり、主要な機能は理解している。インフラ構成・サービスに合わせたレンダリング方式を意識して実装している。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>React Native</Text>
            <Text style={styles.skillYears}>1年半</Text>
            <Text style={styles.skillDesc}>
              実務でiOS/Androidアプリの開発に使用。読み書きは問題なくできる。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>Laravel</Text>
            <Text style={styles.skillYears}>1年半</Text>
            <Text style={styles.skillDesc}>
              Laravel10系を実務で使用。主要な機能は理解している。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>CakePHP</Text>
            <Text style={styles.skillYears}>2年</Text>
            <Text style={styles.skillDesc}>
              実務で既存システムのコードを読み、仕様を確認していた。主要な機能は理解している。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>NestJS</Text>
            <Text style={styles.skillYears}>1年</Text>
            <Text style={styles.skillDesc}>
              実務でSNSアプリのAPI開発に使用。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>Angular</Text>
            <Text style={styles.skillYears}>3ヶ月</Text>
            <Text style={styles.skillDesc}>
              実務で管理画面の開発に使用で勉強中。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}>DB</Text>
            <Text style={styles.skillName}>MySQL</Text>
            <Text style={styles.skillYears}>3年</Text>
            <Text style={styles.skillDesc}>
              CRM開発やiOS/Androidアプリの実務で使用、データの登録・更新・集計などの処理を実装している。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}>インフラ・配信</Text>
            <Text style={styles.skillName}>AWS</Text>
            <Text style={styles.skillYears}>2年</Text>
            <Text style={styles.skillDesc}>
              S3 / CloudFront / Systems Manager Parameter
              Storeを使った配信構成を理解しており、実務ではSREチームに設定を依頼して連携している。
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>Cloudflare</Text>
            <Text style={styles.skillYears}>2ヶ月</Text>
            <Text style={styles.skillDesc}>
              個人開発でWorkers / D1 / R2を使用し、サイトを公開・運用している。
            </Text>
          </View>
          <View style={styles.tableRowLast}>
            <Text style={styles.skillCategory}></Text>
            <Text style={styles.skillName}>Docker</Text>
            <Text style={styles.skillYears}>1年</Text>
            <Text style={styles.skillDesc}>実務で開発環境の構築に使用。</Text>
          </View>
        </View>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        自己PR
      </Text>
      <View style={styles.section}>
        <Text
          style={styles.bodyText}
        >{`自分の担当範囲にとどまらずプロジェクトを推し進めることが得意です。バックエンド側にサーバーサイドの仕様を確認したり、SREチームへインフラ構成を共有して諸々の申請を行うなどはもちろん、仕様の確認は事業部側にも働きかけ、密にコミュニケーションを取りながら進めています。GTMの発火確認や外部ABテストツールの導入確認、UATやリリースの日程調整も経験しています。
また、実装やコードレビューの際も、そのプロジェクトの仕様、インフラ構成を考慮したうえで判断するようにしています。`}</Text>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        GitHub
      </Text>
      <View style={styles.section}>
        <Text style={styles.bodyText}>
          GitHub: https://github.com/nok181701
        </Text>
        <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
          個人開発
        </Text>
        <Text style={styles.bodyText}>
          東京23区の町丁目ごとに治安・洪水・地盤（液状化）・高潮を可視化する引越し先リサーチダッシュボード。
        </Text>
        <Text style={styles.bodyText}>
          引っ越し先を検討する中で、住むエリアの治安や災害リスクを確認したいと思ったものの、賃貸情報サイトの情報だけでは分かりづらいと感じたことがきっかけ。町丁目単位で治安・災害リスクを視覚的に把握できるツールを開発しました。
        </Text>
        <Text style={styles.bodyText}>
          PR: https://github.com/nok181701/sumipita
        </Text>
        <Text style={styles.bodyText}>URL: https://sumipita.com</Text>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        最終学歴
      </Text>
      <View style={styles.section}>
        <Text style={styles.bodyText}>武蔵大学 社会学部 社会学科 卒</Text>
      </View>
      <Text style={styles.subHeader} wrap={false} minPresenceAhead={60}>
        資格
      </Text>
      <View style={styles.section}>
        <Text style={styles.bodyText}>基本情報処理技術者（2023年11月）</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
