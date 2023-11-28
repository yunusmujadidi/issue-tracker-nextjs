import { Button, Flex } from "@radix-ui/themes";
import Link from "@/app/components/Link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueToolbar = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button variant="surface">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueToolbar;
