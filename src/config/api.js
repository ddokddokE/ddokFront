import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const host = "http://localhost:8080"

export async function getMedicineInfo(name) {
    try {
        const response = await axios({
            method: "get",
            url: host + `/medicine/search`,
            params: { name }
        });
        return response.data;
    } catch (err) {
        const error = err.response.data.error || err.message;
        Alert.alert(error);
    }
}
