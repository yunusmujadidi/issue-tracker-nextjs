import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PiNotePencil } from "react-icons/pi";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <PiNotePencil />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
