import { ACMPCAClient } from "../ACMPCAClient";
import { DescribeCertificateAuthorityAuditReportCommandInput } from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a Audit Report is created
 *  @deprecated Use waitUntilAuditReportCreated instead. waitForAuditReportCreated does not throw error in non-success cases.
 */
export declare const waitForAuditReportCreated: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
) => Promise<WaiterResult>;
/**
 * Wait until a Audit Report is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateAuthorityAuditReportCommand for polling.
 */
export declare const waitUntilAuditReportCreated: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
) => Promise<WaiterResult>;
