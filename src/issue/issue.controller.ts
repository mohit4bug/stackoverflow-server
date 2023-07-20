import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  ValidationPipe,
  Param
} from "@nestjs/common"
import { CreateIssueDto } from "@/issue/dto/issue.dto"
import { IssueService } from "@/issue/issue.service"

@Controller("issue")
export class IssueController {
  constructor(private readonly authService: IssueService) {}

  @Post("create")
  async createIssue(@Body(new ValidationPipe()) data: CreateIssueDto) {}

  @Get(":id")
  async getIssue(@Param("id") id: string) {}

  @Put(":id")
  async updateIssue(@Param("id") id: string) {}

  @Delete(":id")
  async deleteIssue(@Param("id") id: string) {}

  @Get()
  async getAllIssues() {}
}
