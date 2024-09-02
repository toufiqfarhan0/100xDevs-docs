import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    onClickHandler && onClickHandler(type);
  };

  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => accessChangeHandler(type)}
    >
      <SelectTrigger className="w-fit border-none bg-transparent text-blue-100">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-400">
        <SelectItem value="viewer" className="cursor-pointer bg-dark-200 text-blue-100 focus:bg-dark-300 hover:bg-dark-300 focus:text-blue-100">
          can view
        </SelectItem>
        <SelectItem value="editor" className="cursor-pointer bg-dark-200 text-blue-100 focus:bg-dark-300 hover:bg-dark-300 focus:text-blue-100">
          can edit
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
