import axios  from "axios";

export async function getPost(id){
      const data = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      return data;
}

export async function getData(id){
      const user = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
      const posts =  await getPost(id);
      user.data.posts = posts.data;
      
      return user.data;
}

