# Model Vending Machine

## Clean CleanArchitecture

![](./pics/CleanArchitecture.jpg)

## ADR (Architecture Decision Record)

- ディレクトリ設計
  - domain
    - valueobjects
  - usecase
  - gateway
    - repository: 永続層アクセス
- 1 ファイル 1 ユースケース
- Entity が持つ id プロパティのフォーマットは UUID v4 とする
