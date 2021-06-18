import { BuildHandlerOptions, BuildMiddleware, Pluggable, UrlParser } from "@aws-sdk/types";
export declare function predictEndpointMiddleware(options: {
    urlParser: UrlParser;
}): BuildMiddleware<any, any>;
export declare const predictEndpointMiddlewareOptions: BuildHandlerOptions;
export declare const getPredictEndpointPlugin: (config: {
    urlParser: UrlParser;
}) => Pluggable<any, any>;
