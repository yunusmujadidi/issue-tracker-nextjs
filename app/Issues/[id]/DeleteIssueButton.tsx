import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PiNotePencil } from "react-icons/pi";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <Link href={`/issues/${issueId}/edit`}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
