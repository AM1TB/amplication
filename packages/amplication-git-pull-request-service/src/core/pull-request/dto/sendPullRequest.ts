import { IsString, ValidateNested } from 'class-validator';
import { EnumGitProvider } from '../../../models';
import { GitCommit } from './GitCommit';
import { GitResourceMeta } from './GitResourceMeta';
export class SendPullRequestArgs {
  @IsString()
  resourceId!: string;
  @IsString()
  oldBuildId!: string;
  @IsString()
  newBuildId!: string;
  @IsString()
  installationId!: string;
  @IsString()
  gitProvider!: EnumGitProvider;
  @IsString()
  gitOrganizationName!: string;
  @IsString()
  gitRepositoryName!: string;
  @ValidateNested()
  commit: GitCommit;

  @ValidateNested()
  gitResourceMeta: GitResourceMeta;
}
