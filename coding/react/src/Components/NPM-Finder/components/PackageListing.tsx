import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const PackageListing: FC = () => {
  const { data, error, isLoading } = useSelector((state: any) => {
    return state.RepoReducer;
  });

  useEffect(() => {});

  return (
    <div>
      <div className="text-center m-3">{error && <h1> {error} </h1>}</div>
      <div className="text-center m-3">
        {isLoading && <h1> Loading... </h1>}
      </div>
      <div className="text-center m-3">
        {data?.searchItem && <h1> No Packaged Found :( </h1>}
      </div>
      {data?.map(
        (
          info: { name: string; url: string; description: string },
          index: number
        ) => {
          return (
            <Card key={index} className="info m-3">
              <CardHeader>
                {index + 1}. <strong>{info?.name.toUpperCase()}</strong>
              </CardHeader>
              <CardBody>
                <p>{info?.description}</p>
              </CardBody>
              <CardFooter className="text-right">
                <a target="_blank" href={info?.url} rel="noreferrer">
                  {" "}
                  Redirect to NPM
                </a>
              </CardFooter>
            </Card>
          );
        }
      )}
    </div>
  );
};

export default PackageListing;
