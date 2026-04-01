import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield is a pre-built rule that provides protection against common attack vectors such as SQL injection, XSS, and CSRF. It operates in "LIVE" mode, which means it will actively block malicious requests in real-time.
    shield({
      mode: "LIVE", // block attacks immediately
    }),
    detectBot({
      mode: "LIVE",
      allow: "CATEGORY:SEARCH_ENGINE",
    }),
     tokenBucket({
        mode: "LIVE",
        refillRate: 30,
        capacity: 25,
        interval: 5,
  })
  ],
  // rate limiting
 
});
