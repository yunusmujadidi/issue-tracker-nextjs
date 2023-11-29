import prisma from "@/prisma/client";
import { Box, Flex, Table } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssueToolbar from "./IssueToolbar";
import Link from "../components/Link";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Pagination from "../components/Pagination";
import IssueTable, { IssueQuery, columnName } from "./IssueTable";
import { Metadata } from "next";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const status = Object.values(Status).includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnName.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issue = await prisma.issue.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      status,
    },
    orderBy,
  });

  const issueCount = await prisma.issue.count({
    where: {
      status,
    },
  });

  return (
    <Flex direction="column" gap="5">
      <IssueToolbar />
      <IssueTable searchParams={searchParams} issue={issue} />
      <Pagination itemCount={issueCount} pageSize={10} currentPage={page} />
    </Flex>
  );
};

// export const dynamic = "force-dynamic";
export const revalidate = 60;
export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all of issues",
};
export default IssuesPage;
