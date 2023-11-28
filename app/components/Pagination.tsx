"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searhParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  const changePage = (page: number) => {
    const params = new URLSearchParams(searhParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  if (pageCount <= 1) return null;
  return (
    <Flex gap="2" align="center" mt="4">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>

      <Button
        variant="surface"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <FaAngleDoubleLeft />
      </Button>
      <Button
        variant="surface"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Prev
      </Button>
      <Button
        variant="surface"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </Button>

      <Button
        variant="surface"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <FaAngleDoubleRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
