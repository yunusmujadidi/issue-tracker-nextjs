"use client";
import { AlertDialog, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action is permanent. You can`t undo this action.
        </AlertDialog.Description>
        <Box className="flex justify-end space-x-2 mt-4">
          <AlertDialog.Cancel>
            <Button>Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">
              <Link href={`/issues/${issueId}/delete`}>Delete Issue</Link>
            </Button>
          </AlertDialog.Action>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
