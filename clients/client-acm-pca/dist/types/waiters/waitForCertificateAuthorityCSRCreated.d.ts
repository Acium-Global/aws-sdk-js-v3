import { ACMPCAClient } from "../ACMPCAClient";
import { GetCertificateAuthorityCsrCommandInput } from "../commands/GetCertificateAuthorityCsrCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a Certificate Authority CSR is created
 *  @deprecated Use waitUntilCertificateAuthorityCSRCreated instead. waitForCertificateAuthorityCSRCreated does not throw error in non-success cases.
 */
export declare const waitForCertificateAuthorityCSRCreated: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateAuthorityCsrCommandInput
) => Promise<WaiterResult>;
/**
 * Wait until a Certificate Authority CSR is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateAuthorityCsrCommand for polling.
 */
export declare const waitUntilCertificateAuthorityCSRCreated: (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateAuthorityCsrCommandInput
) => Promise<WaiterResult>;
