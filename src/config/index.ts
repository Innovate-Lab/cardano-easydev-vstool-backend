import dotenv from "dotenv";
import { Config } from "@/config/types";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: Config = {
  server: {
    runMode: process.env.RUN_MODE || "development",
    host: process.env.HOST || "0.0.0.0",
    httpPort: parseInt(process.env.HTTP_PORT || "8081", 10),
    readTimeout: parseInt(process.env.READ_TIMEOUT || "60", 10),
    writeTimeout: parseInt(process.env.WRITE_TIMEOUT || "60", 10),
    hostDomain: process.env.HOST_DOMAIN || "http://localhost:8081",
    buildName: process.env.BUILD_NAME || "1.0.0",
  },
  // websocket: {
  //   readBufferSizeKB: parseInt(process.env.WS_READ_BUFFER_SIZE_KB || '16', 10),
  //   writeBufferSizeKB: parseInt(process.env.WS_WRITE_BUFFER_SIZE_KB || '16', 10),
  //   maxMessageSizeKB: parseInt(process.env.WS_MAX_MESSAGE_SIZE_KB || '8', 10),
  // },
  // sqlDb: {
  //   type: process.env.SQL_DB_TYPE || 'postgres',
  //   user: process.env.SQL_DB_USER || '',
  //   password: process.env.SQL_DB_PASSWORD || '',
  //   host: process.env.SQL_DB_HOST || '127.0.0.1',
  //   port: parseInt(process.env.SQL_DB_PORT || '5444', 10),
  //   name: process.env.SQL_DB_NAME || '',
  //   tablePrefix: process.env.SQL_DB_TABLE_PREFIX || '',
  //   idSize: parseInt(process.env.SQL_DB_ID_SIZE || '16', 10),
  //   sslMode: process.env.SQL_DB_SSL_MODE || 'disable',
  // },
  nosqlDb: {
    type: process.env.NOSQL_DB_TYPE || "mongodb",
    user: process.env.NOSQL_DB_USER || "",
    password: process.env.NOSQL_DB_PASSWORD || "",
    host: process.env.NOSQL_DB_HOST || "127.0.0.1",
    port: parseInt(process.env.NOSQL_DB_PORT || "27017", 10),
    name: process.env.NOSQL_DB_NAME || "",
    tablePrefix: process.env.NOSQL_DB_TABLE_PREFIX || "",
    sslMode: process.env.NOSQL_DB_SSL_MODE || "disable",
  },
  // app: {
  //   name: process.env.APP_NAME || '',
  //   initDefaultRole: process.env.APP_INIT_DEFAULT_ROLE === 'true',
  //   pageSize: parseInt(process.env.APP_PAGE_SIZE || '10', 10),
  //   jwtAccessSecret: process.env.JWT_ACCESS_SECRET || '',
  //   jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || '',
  //   jwtAccessExpireIn: parseInt(process.env.JWT_ACCESS_EXPIRE_IN || '24', 10),
  //   jwtRefreshExpireIn: parseInt(process.env.JWT_REFRESH_EXPIRE_IN || '168', 10),
  //   apiKey: process.env.API_KEY || '',
  //   allowOrigin: (process.env.ALLOW_ORIGIN || '').split(','),
  //   adminHost: process.env.ADMIN_HOST || '',
  //   baseDomain: process.env.BASE_DOMAIN || '',
  //   systemAdminAccount: process.env.SYSTEM_ADMIN_ACCOUNT || '',
  //   systemAdminPassword: process.env.SYSTEM_ADMIN_PASSWORD || '',
  //   runtimeRootPath: process.env.RUNTIME_ROOT_PATH || 'runtime/',
  //   logMode: process.env.LOG_MODE || 'debug',
  //   logSavePath: process.env.LOG_SAVE_PATH || 'runtime/logs/',
  //   logSaveName: process.env.LOG_SAVE_NAME || 'log',
  //   logFileExt: process.env.LOG_FILE_EXT || 'log',
  //   timeFormat: process.env.TIME_FORMAT || '20060102',
  //   cacheService: process.env.CACHE_SERVICE || 'memory',
  // },
  redis: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: parseInt(process.env.REDIS_PORT || "6379", 10),
    password: process.env.REDIS_PASSWORD || "",
    maxIdle: parseInt(process.env.REDIS_MAX_IDLE || "30", 10),
    maxActive: parseInt(process.env.REDIS_MAX_ACTIVE || "30", 10),
    idleTimeout: parseInt(process.env.REDIS_IDLE_TIMEOUT || "200", 10),
  },
  // aws: {
  //   accessKey: process.env.AWS_ACCESS_KEY || '',
  //   secretKey: process.env.AWS_SECRET_KEY || '',
  //   region: process.env.AWS_REGION || 'ap-southeast-1',
  // },
  // email: {
  //   provider: process.env.EMAIL_PROVIDER || 'ses',
  //   from: process.env.EMAIL_FROM || '',
  //   replyTo: process.env.EMAIL_REPLY_TO || '',
  //   redirectClientURI: process.env.EMAIL_REDIRECT_CLIENT_URI || '',
  //   tokenExpireIn: parseInt(process.env.EMAIL_TOKEN_EXPIRE_IN || '24', 10),
  //   resendAfter: parseInt(process.env.EMAIL_RESEND_AFTER || '60', 10),
  // },
  // upload: {
  //   uploadProvider: process.env.UPLOAD_PROVIDER || 's3',
  //   uploadLocalDir: process.env.UPLOAD_LOCAL_DIR || 'upload',
  //   uploadS3BucketName: process.env.UPLOAD_S3_BUCKET_NAME || '',
  //   uploadS3PathPrefix: process.env.UPLOAD_S3_PATH_PREFIX || '',
  //   uploadBunnyApiKey: process.env.UPLOAD_BUNNY_API_KEY || '',
  //   uploadBunnyApiURI: process.env.UPLOAD_BUNNY_API_URI || 'https://video.bunnycdn.com/library',
  //   uploadBunnyLibraryID: process.env.UPLOAD_BUNNY_LIBRARY_ID || '',
  //   uploadBunnyIFrameURL: process.env.UPLOAD_BUNNY_IFRAME_URL || 'https://iframe.mediadelivery.net/embed',
  //   uploadBunnyIFrameAuthKey: process.env.UPLOAD_BUNNY_IFRAME_AUTH_KEY || '',
  //   bunnyIFrameTokenExpireIn: parseInt(process.env.BUNNY_IFRAME_TOKEN_EXPIRE_IN || '24', 10),
  // },
  // google: {
  //   clientID: process.env.GOOGLE_CLIENT_ID || '',
  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  //   redirectURI: process.env.GOOGLE_REDIRECT_URI || '',
  //   tokenURL: process.env.GOOGLE_TOKEN_URL || 'https://oauth2.googleapis.com/token?',
  //   userDataURL: process.env.GOOGLE_USER_DATA_URL || 'https://www.googleapis.com/oauth2/v3/userinfo',
  // },
  // payment: {
  //   sepayURI: process.env.SEPAY_URI || 'https://qr.sepay.vn/img?acc=%s&bank=%s&amount=%.0f&des=%s',
  // },
  sentry: {
    dsn: process.env.SENTRY_DSN || "",
  },
  openedu101: {
    baseURL: process.env.OPENEDU_API_BASE_URL || "",
    xOrigin: process.env.X_OPENEDU_ORIGIN || "",
    xReferrer: process.env.X_OPENEDU_REFERRER || "",
  },
  rapidAPI: {
    key: process.env.RAPIDAPI_KEY || "",
    host: process.env.RAPIDAPI_HOST || "",
    hostCmtAndQuote: process.env.RAPIDAPI_HOST_CMT_AND_QUOTE || "",
  },
  telegram: {
    apiTelegram: process.env.API_TELEGRAM || "",
  },
  security: {
    secret: process.env.SECRET || "",
  },
};

export { config };
