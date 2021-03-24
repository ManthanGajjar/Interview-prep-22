import React, { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";

const AddUser: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<string>("");
  const [userList, setUserList] = useState<string[]>([]);
  const addName = () => {
    if (user.length) {
      setUserList([...userList, user]);
      setUser("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            ref={inputRef}
            className="form-control"
            type="text"
            placeholder="Add user"
          />{" "}
          <br />
          <Button
            onClick={() => {
              addName();
            }}
          >
            Add User
          </Button>
        </CardBody>
      </Card>
      {/* <UsersList /> */}
      {userList?.map((userInfo, index) => {
        return (
          <ul key={index}>
            <li>{userInfo}</li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};

export default AddUser;
