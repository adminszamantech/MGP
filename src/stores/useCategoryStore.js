import { defineStore } from 'pinia';
import axios from '@/axios';

export const useCategoryStore = defineStore('useCategoryStore', {
    state: () => ({
      categories: null,
      error: null
    }),
  
    actions: {
      async fetchCategories() {
        try {
        const res = await axios.get(`/categories.json`);
          if(res.status == 200){
            this.categories = res.data.items;
          }
        } catch (err) {
          this.error = err.message || 'Failed to load data';
        }
      },
    },
  });