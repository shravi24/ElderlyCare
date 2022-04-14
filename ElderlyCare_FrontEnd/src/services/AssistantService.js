import axios from 'axios'

const ASSISTANT_BASE_REST_API_URL = 'http://localhost:8080/api/Assistant';

class AssistantService{

  
    getAllAssistant(){
        return axios.get(ASSISTANT_BASE_REST_API_URL);
}

createAssistant(Assistant){
       return axios.post (ASSISTANT_BASE_REST_API_URL,Assistant)
}
getAssistantServiceId(AssistantServiceId){
return axios.get(ASSISTANT_BASE_REST_API_URL+'/'+ AssistantServiceId)
}

updateAssistantService(AssistantServiceId,AssistantService){
return axios.put(ASSISTANT_BASE_REST_API_URL+'/'+ AssistantServiceId,AssistantService);
}

deleteAssistantService(AssistantServiceId){
return axios.delete(ASSISTANT_BASE_REST_API_URL +'/'+ AssistantServiceId);
}
}

export default new AssistantService();