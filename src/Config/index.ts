

const KHALTI = {
    publicKey: 'test_public_key_8140cb70054b4c249a7e8547dddcc6f8',
    secretKey: 'test_secret_key_db3d2808c3fd4134835279fcb2ccfaad'
}

const DEV_MONGO = process.env.DEV_MONGO_URI || ''
const PROD_MONGO = process.env.PROD_MONGO_URI || ''

export const MONGODB = process.env.NODE_ENV === 'production' ? PROD_MONGO : DEV_MONGO;

const config = {
    KHALTI,
    MONGODB
}


export default config;