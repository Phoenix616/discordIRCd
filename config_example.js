global.configuration = {
    DEBUG: false,
    showOfflineUsers: true, // When true all users will always be shown. Offline users will be shown as away on clients that support away-notify.
    matchClientStatus: true, // When true the discord user's status will be idle on startup or when IRC away, online if a client is connected, dnd when client disconnects
    showJoinOnChat: false,
    discordToken: '<TOKEN>',
    tlsEnabled: true,
    tlsOptions: {
      keyPath: '/path/to/key.pem',
      certPath: '/path/to/cert.pem'
    },
    discord: {
      messageLimit: 20
    },
    handleCode: true,
    pasteService: 'paste.gg', // possible ones: paste.gg, gist
    githubToken: '<TOKEN>',
    ircServer: {
        listenAddress: '127.0.0.1',
        listenPort: 6667,
        hostname: '<HOSTNAME>',
        username: '<USERNAME>'
    }
};
