module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dfrklekif'),
        api_key: env('788696365145398'),
        api_secret: env('xsctSquFILvMRh1n4NKldWAXod0'),
      },
    },
  });