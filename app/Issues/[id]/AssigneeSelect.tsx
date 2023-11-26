"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  const onValueChange = async (value: string) => {
    try {
      await axios.patch(`/api/issues/${issue.id}`, {
        assignedToUserId: value === "null" ? null : Number(value),
      });
      toast.success("Issue updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (isLoading) return <Select.Root>Loading...</Select.Root>;
  if (error) return <Select.Root>Error</Select.Root>;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "null"}
        onValueChange={onValueChange}
      >
        <Select.Trigger placeholder="Assign to .." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestion</Select.Label>
            <Select.Item value="null">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
