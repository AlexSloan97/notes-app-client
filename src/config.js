export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_Fnb5MlrcfcC7bM3yKr0Oazjc00XGchRF5R",
  s3: {
    REGION: "us-east-2",
    BUCKET: "alex-sloan-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: " https://cd5njn7o1f.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_elnDCf7MP",
    APP_CLIENT_ID: "7oslql2gi15i6oe7c188nf9g42",
    IDENTITY_POOL_ID: "us-east-2:39173b1f-8224-4f82-a4b2-7025dbdc7582"
  }
};
