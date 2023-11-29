import React from "react";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

const Home = async () => {
  const [open, closed, inProgress] = await Promise.all([
    prisma.issue.count({ where: { status: "OPEN" } }),
    prisma.issue.count({ where: { status: "CLOSED" } }),
    prisma.issue.count({ where: { status: "IN_PROGRESS" } }),
  ]);

  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Flex direction="column" gap="7" align="center">
          <IssueSummary open={open} closed={closed} inProgress={inProgress} />
          <IssueChart open={open} closed={closed} inProgress={inProgress} />
        </Flex>
        <LatestIssue />
      </Grid>
    </>
  );
};
export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "view a summary of issues",
};
export default Home;
