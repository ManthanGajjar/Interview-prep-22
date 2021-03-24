import { Component } from "react";

interface ComponentProps {
  name: string;
}

class ClassComp extends Component<ComponentProps> {
  render() {
    return <div>From Class Component: {this.props.name}.</div>;
  }
}

export default ClassComp;
