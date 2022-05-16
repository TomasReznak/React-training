import {Box, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import {apiClient} from "../../api-client";
import {AxiosResponse} from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function ApiCallComponent () {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    apiClient.get('https://jsonplaceholder.typicode.com/posts/', {
      responseType: 'text',
    }).then((posts: AxiosResponse) => {
      console.log(posts.data);
      setPosts(posts.data)
    });
  }, []);

  return (
    <div className={'center'}>
      <Box style={{width: 600}}>
        <h1>ApiCallComponent</h1>
        <hr />
        <br />
        {posts.slice(0,5).map((post: Post) => (
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

export default ApiCallComponent;
