import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

//used a functional component instead of class just to try it
const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  const { title, description } = props.stream;
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
