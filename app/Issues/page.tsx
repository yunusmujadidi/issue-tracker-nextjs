import prisma from "@/prisma/client";
import { Box, Table } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssueToolbar from "./IssueToolbar";
import Link from "../components/Link";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

const column: { label: string; value: keyof Issue; className?: string }[] = [
  {
    label: "Issue",
    value: "title",
  },

  {
    label: "Status",
    value: "status",
    className: "hidden md:table-cell",
  },
  {
    label: "Created",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];
const IssuesPage = async ({ searchParams }: Props) => {
  const status = Object.values(Status).includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = column
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issue = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
  });

  return (
    <div>
      <IssueToolbar />

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {column.map((col) => (
              <Table.ColumnHeaderCell key={col.value} className={col.className}>
                <NextLink
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: col.value,
                    },
                  }}
                >
                  {col.label}
                </NextLink>
                {col.value === searchParams.orderBy && (
                  <FaArrowAltCircleUp className="inline ml-2 " />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issue.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Box className="flex justify-between">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <Box className="md:hidden ">
                    <IssueStatusBadge status={issue.status} />
                  </Box>
                </Box>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

// export const dynamic = "force-dynamic";
export const revalidate = 60;
export default IssuesPage;
