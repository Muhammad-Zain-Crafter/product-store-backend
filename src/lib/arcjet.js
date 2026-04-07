import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  env: process.env.ARCJET,
  characteristics: ["ip.src"],
  rules: [
    // shield is a pre-built rule that provides protection against common attack vectors such as SQL injection, XSS, and CSRF. It operates in "LIVE" mode, which means it will actively block malicious requests in real-time.
    shield({ // block attacks immediately
      mode: "LIVE", // RL is active
    }),
    detectBot({
      mode: "DRY_RUN",
      allow: ["CATEGORY:SEARCH_ENGINE"]
    }),
     // rate limiting
     tokenBucket({
        mode: "LIVE",
        refillRate: 30,
        capacity: 25, // max 25 tokens in the bucket
        interval: 5,
  })
  ],
 
 
});
