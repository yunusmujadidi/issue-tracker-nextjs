import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PiNotePencil } from "react-icons/pi";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Box>
      <Button>
        <PiNotePencil />
        <Link href={"issues/${issue.id}/edit"}>Edit Issue</Link>
      </Button>
    </Box>
  );
};

export default EditIssueButton;