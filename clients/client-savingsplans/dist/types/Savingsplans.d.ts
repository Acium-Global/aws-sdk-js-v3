import { SavingsplansClient } from "./SavingsplansClient";
import { CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput } from "./commands/CreateSavingsPlanCommand";
import { DeleteQueuedSavingsPlanCommandInput, DeleteQueuedSavingsPlanCommandOutput } from "./commands/DeleteQueuedSavingsPlanCommand";
import { DescribeSavingsPlanRatesCommandInput, DescribeSavingsPlanRatesCommandOutput } from "./commands/DescribeSavingsPlanRatesCommand";
import { DescribeSavingsPlansCommandInput, DescribeSavingsPlansCommandOutput } from "./commands/DescribeSavingsPlansCommand";
import { DescribeSavingsPlansOfferingRatesCommandInput, DescribeSavingsPlansOfferingRatesCommandOutput } from "./commands/DescribeSavingsPlansOfferingRatesCommand";
import { DescribeSavingsPlansOfferingsCommandInput, DescribeSavingsPlansOfferingsCommandOutput } from "./commands/DescribeSavingsPlansOfferingsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Savings Plans are a pricing model that offer significant savings on AWS usage (for
 *         example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD
 *         per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For
 *         more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.</p>
 */
export declare class Savingsplans extends SavingsplansClient {
    /**
     * <p>Creates a Savings Plan.</p>
     */
    createSavingsPlan(args: CreateSavingsPlanCommandInput, options?: __HttpHandlerOptions): Promise<CreateSavingsPlanCommandOutput>;
    createSavingsPlan(args: CreateSavingsPlanCommandInput, cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void): void;
    createSavingsPlan(args: CreateSavingsPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void): void;
    /**
     * <p>Deletes the queued purchase for the specified Savings Plan.</p>
     */
    deleteQueuedSavingsPlan(args: DeleteQueuedSavingsPlanCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueuedSavingsPlanCommandOutput>;
    deleteQueuedSavingsPlan(args: DeleteQueuedSavingsPlanCommandInput, cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void): void;
    deleteQueuedSavingsPlan(args: DeleteQueuedSavingsPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void): void;
    /**
     * <p>Describes the specified Savings Plans rates.</p>
     */
    describeSavingsPlanRates(args: DescribeSavingsPlanRatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSavingsPlanRatesCommandOutput>;
    describeSavingsPlanRates(args: DescribeSavingsPlanRatesCommandInput, cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void): void;
    describeSavingsPlanRates(args: DescribeSavingsPlanRatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void): void;
    /**
     * <p>Describes the specified Savings Plans.</p>
     */
    describeSavingsPlans(args: DescribeSavingsPlansCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSavingsPlansCommandOutput>;
    describeSavingsPlans(args: DescribeSavingsPlansCommandInput, cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void): void;
    describeSavingsPlans(args: DescribeSavingsPlansCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void): void;
    /**
     * <p>Describes the specified Savings Plans offering rates.</p>
     */
    describeSavingsPlansOfferingRates(args: DescribeSavingsPlansOfferingRatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSavingsPlansOfferingRatesCommandOutput>;
    describeSavingsPlansOfferingRates(args: DescribeSavingsPlansOfferingRatesCommandInput, cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void): void;
    describeSavingsPlansOfferingRates(args: DescribeSavingsPlansOfferingRatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void): void;
    /**
     * <p>Describes the specified Savings Plans offerings.</p>
     */
    describeSavingsPlansOfferings(args: DescribeSavingsPlansOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSavingsPlansOfferingsCommandOutput>;
    describeSavingsPlansOfferings(args: DescribeSavingsPlansOfferingsCommandInput, cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void): void;
    describeSavingsPlansOfferings(args: DescribeSavingsPlansOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
