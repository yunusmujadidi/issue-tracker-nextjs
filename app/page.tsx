import React from "react";
import Pagination from "./components/Pagination";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

const Home = async () => {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });

  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });

  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });

  return (
    <>
      <IssueSummary open={open} closed={closed} inProgress={inProgress} />
      <IssueChart open={open} closed={closed} inProgress={inProgress} />
      <LatestIssue />
    </>
  );
};

export default Home;
