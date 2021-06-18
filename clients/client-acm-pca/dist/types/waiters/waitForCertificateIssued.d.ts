import { ACMPCAClient } from "../ACMPCAClient";
import { GetCertificateCommandInput } from "../commands/GetCertificateCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a certificate is issued
 *  @deprecated Use waitUntilCertificateIssued instead. waitForCertificateIssued does not throw error in non-success cases.
 */
export declare const waitForCertificateIssued: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateCommandInput
) => Promise<WaiterResult>;
/**
 * Wait until a certificate is issued
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateCommand for polling.
 */
export declare const waitUntilCertificateIssued: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateCommandInput
) => Promise<WaiterResult>;
