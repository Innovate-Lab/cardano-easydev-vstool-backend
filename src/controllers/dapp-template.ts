import { RequestHandler } from "express";

import { CustomExpress } from "../pkg/app/response.js";
import path from "path";
import { dappTemplateService } from "../services/dapp-template.js";
import { GetTemplateRequest } from "../types/api/dto/dapp-template.js";

const getTemplate: RequestHandler = async (req, res, next) => {
    try {
        const { offChainSDK, language } = req.body as GetTemplateRequest;
        const appExpress = new CustomExpress(req, res, next);
        const templatesDir = path.join(process.cwd(), `templates/${offChainSDK}-${language}`);
        const templateStructure = await dappTemplateService.readDirectoryStructure(templatesDir);
        appExpress.response201({
            success: true,
            data: templateStructure
        });
    } catch (error) {
        throw error;
    }
};

const dappTemplateController = {
    getTemplate,
};

export { dappTemplateController };
