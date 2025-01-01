import { defineStore } from 'pinia';
import axios from '@/axios';

export const useNavStore = defineStore('useNavStore', {
    state: () => ({
      items: null,
      error: null
    }),
  
    actions: {
      async fetchItems() {
        try {
        const res = await axios.get(`/header-navs.json`);
        if(res.status == 200){
            this.items = res.data.items;
        }
        } catch (err) {
            this.error = err.message || 'Failed to load data';
        }
      },
    },
});