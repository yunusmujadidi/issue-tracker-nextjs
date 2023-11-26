import { Button, Flex } from "@radix-ui/themes";
import Link from "@/app/components/Link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const NewIssueButton = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Button color="sky">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default NewIssueButton;
