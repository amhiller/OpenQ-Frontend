module.exports = () => {
  const env = {
    NEXT_PUBLIC_OPENQ_ADDRESS: process.env.NEXT_PUBLIC_OPENQ_ADDRESS,
    NEXT_PUBLIC_FAKE_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_FAKE_TOKEN_ADDRESS,
    NEXT_PUBLIC_MOCK_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_MOCK_TOKEN_ADDRESS,
    DEPLOY_ENV: process.env.DEPLOY_ENV,
    NEXT_PUBLIC_PROVIDER_URL: process.env.PROVIDER_URL,
    WALLET_KEY: process.env.WALLET_KEY,
    NEXT_PUBLIC_PAT: process.env.PAT,
  };

  const config = {
    reactStrictMode: true,
    env,
    images: {
      domains: ["githubusercontent.com", "avatars.githubusercontent.com"],
    }
  };

  return config;
};
