import { defineStore } from "pinia";
import axios from "@/axios";

export const useGameProviderStore = defineStore('useGameProviderStore',{
    state:()=>({
        items: null,
        error: null
    }),
    actions:{
        async fetchGameProvider(){
            try {
            const res = await axios.get(`/games-provider.json`);
            if(res.status == 200){
                this.items = res.data.items;
            }
            } catch (err) {
                this.error = err.message || 'Failed to load data';
            }
        }
    }
});