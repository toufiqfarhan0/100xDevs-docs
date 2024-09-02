"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter()
  const addDocumentHandler = async () => {
    try {
        const room = await createDocument({userId, email});

        if(room) router.push(`/documents/${room.id}`)
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="bg-gradient-to-t from-blue-500 to-blue-400 flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="Add" width={24} height={24} />
      <p className="hidden sm:block"> Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
