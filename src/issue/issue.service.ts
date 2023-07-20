import { PrismaService } from "@/lib/prisma.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class IssueService {
  constructor(private prisma: PrismaService) {}
  async createIssue() {}
  async getIssue() {}
  async updateIssue() {}
  async deleteIssue() {}
  async getAllIssues() {}
}
