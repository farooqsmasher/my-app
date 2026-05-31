import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_KOyrSJ8Sc",
      userPoolClientId: "5m2pffdjulhl57vaqvd7bg1jsh",
      loginWith: {
        email: true,
      },
    },
  },
});