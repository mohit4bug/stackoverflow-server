import { IsArray, IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateIssueDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  problemStatement: string

  @IsString()
  @IsNotEmpty()
  resultStatement: string

  @IsBoolean()
  @IsNotEmpty()
  isDraft: boolean

  @IsArray()
  @IsNotEmpty()
  tags: string[]
}
