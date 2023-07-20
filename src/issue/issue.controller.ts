import { Controller, Delete, Get, Post, Put } from "@nestjs/common"

@Controller("issue")
export class IssueController {
  @Post("create")
  async createIssue() {}

  @Get(":id")
  async getIssue() {}

  @Put(":id")
  async updateIssue() {}

  @Delete(":id")
  async deleteIssue() {}

  @Get()
  async getAllIssues() {}
}
