import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import { PiNotePencil } from "react-icons/pi";
import Link from "@/app/components/Link";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3 my-2">
          <IssueStatusBadge status={issue.status} />

          <p>{issue.createdAt.toDateString()}</p>
        </Flex>
        <Card className="prose my-4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <PiNotePencil />
          <Link href={"issues/${issue.id}/edit"}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
