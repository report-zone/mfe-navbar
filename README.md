## Running

```
yarn install
yarn start
```

webpack server will start on port 3002 http://localhost:3002


## Deploying to AWS

This is a bit tricky but possible

create a new file

```
  touch .env.script
```

then edit and add the following with the proper values from AWS

```
  DISTRIBUTION=<AWS Distribution ID>
  S3_BUCKET=<AWS Bucket Name>
```