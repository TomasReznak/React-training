import {Box, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import {apiClient} from "../../api-client";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {AppState} from "../../redux/store/models/AppState";
import {getDataActions, selectData} from "../../saga/sample/ducks";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function ApiCallWithReduxComponent ({posts, getPosts}: StateToProps & DispatchToProps) {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={'center'}>
      <Box style={{width: 600}}>
        <h1>ApiCallWithReduxComponent</h1>
        <hr />
        <br />
        {posts?.map((post: Post) => (
          <Paper key={post.id} variant={'outlined'}>
            <Box p={1}>
              <b>{post.title}</b>
            </Box>
            <Box p={1}>
              <p>{post.body}</p>
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

interface StateToProps {
  posts: Array<Post>;
}

interface DispatchToProps {
  getPosts: () => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
  posts: selectData(state),
});

const mapDispatchToProps: DispatchToProps = {
  getPosts: getDataActions.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiCallWithReduxComponent);
