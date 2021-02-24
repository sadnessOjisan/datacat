# datacat

free error reporter

## Build

nothing. Vercel builds all.

## API Spec

Host is depends on your deploy.
My example's host is https://datacat.vercel.app

| Endpoint     | Method | Request      |
| ------------ | ------ | ------------ |
| /api/echo-id | Get    | ?id={string} |

```

curl -X POST -H "Content-Type: application/json" -d '{"message":"sensuikan1973"}' https://datacat-git-feature-connect-slack-ojisan.vercel.app/api/report-dev-error
```
