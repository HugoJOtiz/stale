import {IIssuesProcessorOptions} from '../../src/interfaces/issues-processor-options';

export const DefaultProcessorOptions: IIssuesProcessorOptions = Object.freeze({
  repoToken: 'none',
  staleIssueMessage: 'This issue is stale',
  stalePrMessage: 'This PR is stale',
  closeIssueMessage: 'This issue is being closed',
  closePrMessage: 'This PR is being closed',
  daysBeforeStale: 1,
  daysBeforeIssueStale: NaN,
  daysBeforePrStale: NaN,
  daysBeforeClose: 30,
  daysBeforeIssueClose: NaN,
  daysBeforePrClose: NaN,
  staleIssueLabel: 'Stale',
  closeIssueLabel: '',
  exemptIssueLabels: '',
  stalePrLabel: 'Stale',
  closePrLabel: '',
  exemptPrLabels: '',
  onlyLabels: '',
  operationsPerRun: 100,
  debugOnly: true,
  removeStaleWhenUpdated: false,
  ascending: false,
  skipStaleIssueMessage: false,
  skipStalePrMessage: false,
  deleteBranch: false,
  startDate: '',
  exemptMilestones: '',
  exemptIssueMilestones: '',
  exemptPrMilestones: '',
  exemptAllMilestones: false,
  exemptAllIssueMilestones: undefined,
  exemptAllPrMilestones: undefined
});