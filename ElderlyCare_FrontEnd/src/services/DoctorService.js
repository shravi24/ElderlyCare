import axios from 'axios'

const DOCTOR_BASE_REST_API_URL = 'http://localhost:8080/api/v1/doctors';

class DoctorService{

    getAllDoctors(){
        return axios.get(DOCTOR_BASE_REST_API_URL)
    }

    createDoctor(doctor){
        return axios.post(DOCTOR_BASE_REST_API_URL, doctor)
    }

    getDoctorById(doctorId){
        return axios.get(DOCTOR_BASE_REST_API_URL + '/' + doctorId);
    }

    updateDoctor(doctorId, doctor){
        return axios.put(DOCTOR_BASE_REST_API_URL + '/' +doctorId, doctor);
    }

    deleteDoctor(doctorId){
        return axios.delete(DOCTOR_BASE_REST_API_URL + '/' + doctorId);
    }
}

export default new DoctorService();