import React, { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody } from "reactstrap";
import { searchRepo } from "../redux/actions";
import reducer from "../redux/reducers";

const SearchPackage: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const [searchingRepo, setRepo] = useState<string>("");

  const searchPackage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchingRepo.trim().length) {
      dispatch(searchRepo(searchingRepo.trim()));
      setRepo("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <form
            onSubmit={searchPackage}
            // onSubmit={() => {
            //   searchPackage();
            // }}
          >
            <input
              onChange={(e) => {
                setRepo(e.target.value);
              }}
              value={searchingRepo}
              ref={inputRef}
              className="form-control"
              type="text"
              placeholder="Search NPM Package..."
            />{" "}
            <br />
            <Button type="submit">Search</Button>
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default SearchPackage;
