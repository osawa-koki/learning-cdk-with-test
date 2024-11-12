# learning-cdk-with-test

📯📯📯 CDKでAWSリソースをプロビジョニングしてみる！(テスト付き！)  

[![ci](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/ci.yml/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/ci.yml)
[![cd](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/cd.yml/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/cd.yml)
[![Dependabot Updates](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/osawa-koki/learning-cdk-with-test/actions/workflows/dependabot/dependabot-updates)

## 実行方法

DevContainerに入り、以下のコマンドを実行します。  

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

## メモ

1. プロジェクトの初期化

### 1. プロジェクトの初期化

```bash
cdk init app --language typescript
```
