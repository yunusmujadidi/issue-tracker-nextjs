import { Button } from "@radix-ui/themes";
import Link from "@/app/components/Link";
import React from "react";

const NewIssueButton = () => {
  return (
    <div className="mb-5">
      <Button color="sky">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default NewIssueButton;
