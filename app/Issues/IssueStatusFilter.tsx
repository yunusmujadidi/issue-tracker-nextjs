"use client";
import { Select } from "@radix-ui/themes";
import React from "react";

const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Filter by status</Select.Label>
          <Select.Item value="null">Unassigned</Select.Item>
          <Select.Item value="null">Open</Select.Item>
          <Select.Item value="null">Closed</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
