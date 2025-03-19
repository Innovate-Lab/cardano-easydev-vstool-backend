import dotenv from "dotenv";
import { Config } from "./types";

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
  blockfrost: {
    projectId: process.env.BLOCKFROST_PROJECT_ID || "preprod7jAxIo4RPBj7pDtKPsG33AIj0ukZGNXk",
    baseUrl: process.env.BLOCKFROST_BASE_URL || "https://cardano-preprod.blockfrost.io/api/v0",
  },
};

export { config };
