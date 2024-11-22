import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as LearningCdk from '../lib/learning-cdk-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/learning-cdk-stack.ts
test('SQS Queue Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new LearningCdk.LearningCdkStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300,
    QueueName: 'LearningCdkQueue',
  });
});
