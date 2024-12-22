const conf = {
    clientId: String(import.meta.env.VITE_CLIENT_ID),
    clientSecret: String(import.meta.env.VITE_CLIENT_SECRET),
    redirectUri: String(import.meta.env.VITE_REDIRECT_URI),
}

export default conf