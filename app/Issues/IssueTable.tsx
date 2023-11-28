import { Table, Box } from "@radix-ui/themes";
import NextLink from "next/link";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IssueStatusBadge, Link } from "../components";
import { Issue, Status } from "@prisma/client";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  issue: Issue[];
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

export const columnName = column.map((column) => column.value);

const IssueTable = ({ searchParams, issue }: Props) => {
  return (
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
  );
};

export default IssueTable;
