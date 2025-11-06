import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/user';

const todoApi = {
    async getAll(){
        const result = await axios.get(ENDPOINT_URL);
        return result.data;
    },
    async post(todo){
        const result = await axios.post(ENDPOINT_URL,todo);
        return result.data;
    },
    async delete(user){
        const result = await axios.delete(ENDPOINT_URL+'/'+user.id);
        return result.data;
    },
    async patch(todo){
        const result = await axios.patch(ENDPOINT_URL+'/'+todo.id, todo);
        return result.data;
    }
};

todoApi.delete({
   id: 4,
   
});

export default todoApi;