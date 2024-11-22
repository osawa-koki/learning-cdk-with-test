# learning-cdk-with-test

📯📯📯 CDKでAWSリソースをプロビジョニングしてみる！(テスト付き！)  

[![ci](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/ci.yml/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/ci.yml)
[![cd](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/cd.yml/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/cd.yml)
[![Dependabot Updates](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/dependabot/dependabot-updates)

## 実行方法

DevContainerに入り、以下のコマンドを実行します。  
※ `~/.aws/credentials`にAWSの認証情報があることを前提とします。  

```bash
# テンプレートを生成
cdk synth

# スタックを作成
cdk bootstrap

# スタックをデプロイ
cdk deploy
```

以下のコマンドで正しくデプロイされたか確認します。  

```bash
# CDKのリソースを確認
cdk list

# AWS CLIを使って確認
aws sqs list-queues --queue-name-prefix LearningCdkQueue --no-cli-pager
```

リソースを削除する場合は以下のコマンドを実行します。  

```bash
cdk destroy
```

## 自動デプロイ

GitHub ActionsでCI/CDを行っています。  
タグをプッシュすると自動的にデプロイされます。  

以下のシークレットを設定してください。  

| シークレット名 | 説明 |
| --- | --- |
| AWS_ACCESS_KEY_ID | AWSのアクセスキーID |
| AWS_SECRET_ACCESS_KEY | AWSのシークレットアクセスキー |
| AWS_REGION | リージョン |

## テスト

以下のコマンドでテストを実行します。  

```bash
npm run test
```

## メモ

1. プロジェクトの初期化

### 1. プロジェクトの初期化

```bash
cdk init app --language typescript
```
